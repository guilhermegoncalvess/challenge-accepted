import { response } from "express";
import { getRepository, Repository } from "typeorm";
import Locale from "../models/Locale";


interface CreateLocale {
    id?: string; 
    code: number;
    name: string;
    state: string;
    latitude: number;
    longitude: number;
}

class localesRepository extends Repository<Locale> {

    public async findall(): Promise<Locale[]> {
        const localesRepository = getRepository(Locale);

        const locales = await localesRepository.find({ 
            select: ['id', 'name', 'code', 'state', 'latitude', 'longitude' ]
        });

        return locales;
    }

    public async add({
        code,
        name,
        state,
        latitude,
        longitude
    }: CreateLocale): Promise<Locale> {

        
        const localesRepository = getRepository(Locale);
        try {
            const locale = localesRepository.create({
                code,
                name,
                state,
                latitude,
                longitude
            });

            await localesRepository.save(locale);

            return locale;

        } catch (err) {
            return err.message;
        }
    }
    
    public async alter({
        id,
        code,
        name,
        state,
        latitude,
        longitude
    }: CreateLocale): Promise<Locale> {
        const localesRepository = getRepository(Locale);

        const locale = await localesRepository.findOne(id)
        
        if( !locale ) {
            throw new Error('Locale not found')
        }
        
        if ( code )  locale.code = code;
        if ( name )  locale.name = name;
        if ( state )  locale.state = state;
        if ( latitude )  locale.latitude = latitude;
        if ( longitude )  locale.longitude = longitude;
        
        await localesRepository.save(locale);

        return locale;
    }

    public async removeLocale( id: string ): Promise<Locale> {
        const localesRepository = getRepository(Locale);

        const locale = await localesRepository.findOne(id)
        
        if( !locale ) {
            throw new Error('Locale not found')
        }
        
        await localesRepository.remove(locale);

        return locale;
    }

}

export default localesRepository;