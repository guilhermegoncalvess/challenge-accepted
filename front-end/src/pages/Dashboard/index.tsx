import React, { useState } from 'react';

import LogoImg from '../../assets/images/logo-white.png';

import api from '../../services/api';
import elastic from '../../services/elastic';

import { NavBar, Form, Content, ListSearch, Title } from './styles';
import Weather from '../../components/Weather';

interface WeatherData {
    date: Date;
    text: string;
    id: string;
    locale: { 
        id: string;
        code: number;
        name: string;
        state: string;
        latitude: number;
        longitude: number;    
    }
    temperature: {
        min: number;
        max: number;
    }
    rain: {
        probability: number;
        precipitation: number;
        
    }
}
interface Cities {
    id: string;
    city: string;
    code: number,
    state: string;
}
interface CitiesSearch {
    _id: string;
    _source: Cities;
}

interface HitsFound {
    hits: CitiesSearch[];
}

interface DataCitiesSearch {
    hits: HitsFound;
}

const Dashboard: React.FC = () => {
    const [suggestions, setSuggestions] = useState<Cities[]>([]);
    const [ searchCity, setNewSearchCity] = useState('');
    const [ cityFound, setNewCityFound] = useState('');
    const [weathers, setWeathers] = useState<WeatherData[]>([]);

    async function loadWeathers(event: any, locale_code: number, city: string): Promise<void> {
        

        event.preventDefault();

        
        await api.get<WeatherData[]>(`weathers/${locale_code}`).then( response => {    
            const weather= response.data;
            console.log(weather)
            
            setWeathers(weather);
            setNewCityFound(city)
            setSuggestions([]);

        });

    }



    async function handleSearchCity(event: any): Promise<void> {
        setNewSearchCity(event.target.value);

        if(event.target.value === '') {
            setSuggestions([])
        }
        else {
            const {data} = await elastic.post<DataCitiesSearch>('_search?pretty&size=30', {
                    "query": {
                      "match_phrase_prefix": {
                        "city": searchCity
                      }
                    }
                  }
                  );
                  
            const cititiesFound = data.hits.hits.map( data => {
                return { id: data._id, city: data._source.city, code: data._source.code, state: data._source.state }
            });

            setSuggestions(cititiesFound);  
        }

    }
    
    return (
        <>
            <NavBar>
                <img src={LogoImg} alt="Clima Tempo" />
            </NavBar>

            <Form >
                <input placeholder="Veja a previsão de sua cidade" onChange={ e => handleSearchCity(e)} />
            </Form>

            {suggestions.length>0 && 
                <ListSearch>
                    <ul>
                        { 
                            suggestions.map( data => {
                                return (
                                    <div onClick={ e => loadWeathers(e, data.code, data.city)}>

                                    <li key={data.id}>
                                        {data.city} - {data.state}
                                    </li>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </ListSearch>
            }

            { ((cityFound && weathers.length > 0) && <Title >Previsão do tempo em {cityFound}</Title> )}
            { ((cityFound && weathers.length === 0) && <Title >Não há previsão do tempo para {cityFound}</Title> )}

            <Content>
                {  
                    weathers.map( weather => {
                        return (
                        <Weather key={weather.id}
                                date={weather.date}
                                text={weather.text}
                                temperature={weather.temperature}
                                rain={weather.rain}
                        />)
                    })
                }
            </Content>
           
        </>
    )
};

export default Dashboard;