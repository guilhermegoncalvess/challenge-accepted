import { request, Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import { format, formatISO, parseISO } from 'date-fns';

import WeatherRepository from '../repositories/WeatherRepository';

const weathersRouter = Router();
const weathersRepository = new WeatherRepository();

weathersRouter.get('/', async ( request, response ) => {
    const weathers = await weathersRepository.findall();

    return response.json(weathers);
});

weathersRouter.get('/:id/period', async ( request, response ) => {
    const { begin, end } = request.query;
    const { id } = request.params;

    const parsedDateBegin =parseISO(String(begin))
    const parsedDateEnd = parseISO(String(end))


    const weathers = await weathersRepository.findByDate(id, parsedDateBegin, parsedDateEnd);

    return response.json({period: {begin: formatISO(parsedDateBegin,{representation: 'date'}), end: formatISO(parsedDateEnd,{representation: 'date'})},weathers});
});

weathersRouter.post('/', async ( request, response ) => {
    const { locale_id, date, text, temperature, rain } = request.body; 

    const weather = await weathersRepository.add({
        locale_id,
        date,
        text,
        temperature,
        rain
    });

    return response.status(201).json(weather);
});

weathersRouter.put('/:id', async ( request, response ) => {
    const { locale_id, date, text, temperature, rain } = request.body; 
    const { id } = request.params;

    try {
        const weather = await weathersRepository.alter({
            id,
            locale_id,
            date,
            text,
            temperature,
            rain
        });
    
        return response.status(201).json(weather);

    } catch (error ){
        return response.json({error: error.message})
    }
});

weathersRouter.delete('/:id', async ( request, response ) => {
    const { id } = request.params;

    try {
        const weather = await weathersRepository.removeWeather( id );
    
        return response.status(201).json(weather);

    } catch (error ){
        return response.json({error: error.message})
    }
});

export default weathersRouter;