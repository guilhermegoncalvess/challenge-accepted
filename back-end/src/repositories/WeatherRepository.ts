import { response } from "express";
import { getRepository, Repository } from "typeorm";
import Weather from "../models/Weather";

import { isAfter, isBefore, isEqual } from 'date-fns';
import Locale from "../models/Locale";

interface CreateWeather {
    id?: string;
    locale_id: string;
    date: Date;
    text: string;
    temperature: { min: number; max: number}
    rain: { probability: number; precipitation: number}
}

class WeatherRepository extends Repository<Weather> {

    public async findall(): Promise<Weather[]> {
        const weatherRepository = getRepository(Weather);

        const locales = await weatherRepository.find({ 
            select: ['id','date', 'text', 'temperature', 'rain'],
            relations: ['locales']
        });

        return locales;
    }
    
    public async findByLocale(id: string): Promise<Weather[]> {

        const localesRepository = getRepository(Locale);
        const locale = await localesRepository.findOne({where: { code: id}})

        
        const weatherRepository = getRepository(Weather);
        
        if(!locale){
            return []
        }

        const weather = await weatherRepository.find({ 
            where: {locale_id: locale.id},
            select: ['id','date', 'text', 'temperature', 'rain'],
            relations: ['locales'],
            order: {date: 'ASC'}
        });

        // const weatherFormated: any[] =  weather.map( sample => {
        //     const weatherFormated = {
        //             id: sample.id,
        //             locale_id: sample.locale_id,
        //             text: sample.text,
        //             temperature: sample.temperature,
        //             rain: sample.rain,
        //             date: formatISO(sample.date, {representation: 'date'})
        //    }
            
        //    return weatherFormated;
        // });

        return weather;
    }
    public async findByDate(id: string, dateBegin: Date, DateEnd: Date): Promise<Weather[]> {
        const weatherRepository = getRepository(Weather);

        const weathers = await weatherRepository.find({ 
            where: {locale_id: id},
            select: ['date', 'text', 'temperature', 'rain'],
            relations: ['locales'],
            order: {date: 'ASC'}
        });

        const weatherByPeriod = weathers.filter( weather => { 
            if((isAfter(weather.date, dateBegin) && isBefore(weather.date, DateEnd) )) {
                return weather;
            }
        });

        return weatherByPeriod;
    }

    public async add({
        locale_id,
        date,
        text,
        temperature,
        rain
    }: CreateWeather): Promise<Weather> {

        
        const weatherRepository = getRepository(Weather);
        try {
            const weather = weatherRepository.create({
                locale_id,
                date,
                text,
                temperature,
                rain
            });

            await weatherRepository.save(weather);

            return weather;

        } catch (err) {
            return err.message;
        }
    }
    
    public async alter({
        id,
        locale_id,
        date,
        text,
        temperature,
        rain
    }: CreateWeather): Promise<Weather> {
        const weatherRepository = getRepository(Weather);

        const weather = await weatherRepository.findOne({id})
        
        if( !weather ) {
            throw new Error('weather not found')
        }
        
        if ( date )  weather.date = date;
        if ( text )  weather.text = text;
        if ( temperature )  weather.temperature = temperature;
        if ( rain )  weather.rain = rain;
        
        await weatherRepository.save(weather);

        return weather;
    }

    public async removeWeather( id: string ): Promise<Weather> {
        const weatherRepository = getRepository(Weather);

        const weather = await weatherRepository.findOne({id})
        
        if( !weather ) {
            throw new Error('weather not found')
        }
        
        await weatherRepository.remove(weather);

        return weather;
    }

}

export default WeatherRepository;