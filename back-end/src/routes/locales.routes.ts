import { request, Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';

import Locale from '../models/Locale';
import LocalesRepository from '../repositories/LocalesRepository';

const localesRouter = Router();
const localesRepository = new LocalesRepository();

localesRouter.get('/', async ( request, response ) => {
    const locales = await localesRepository.findall();

    return response.json(locales);
});

localesRouter.post('/', async ( request, response ) => {
    const { code, name, state, latitude, longitude } = request.body; 

    const locale = await localesRepository.add({
        code,
        name,
        state,
        latitude,
        longitude
    });

    return response.status(201).json(locale);
});

localesRouter.put('/:id', async ( request, response ) => {
    const { code, name, state, latitude, longitude } = request.body; 
    const { id } = request.params;

    try {
        const locale = await localesRepository.alter({
            id,
            code,
            name,
            state,
            latitude,
            longitude
        });
    
        return response.status(201).json(locale);

    } catch (error ){
        return response.json({error: error.message})
    }
});

localesRouter.delete('/:id', async ( request, response ) => {
    const { id } = request.params;

    try {
        const locale = await localesRepository.removeLocale( id );
    
        return response.status(201).json(locale);

    } catch (error ){
        return response.json({error: error.message})
    }
});

export default localesRouter;