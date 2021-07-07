import React, { useEffect, useState, FormEvent } from 'react';

import { NavBar, Form, Content, ListSearch } from './styles';

import LogoImg from '../../assets/images/logo-white.png';
import SearchImg from '../../assets/images/icons/search.png';


import api from '../../services/api';
import Weather from '../../components/Weather';
import axios from 'axios';

interface WeatherData {
    date: string;
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
}
interface CitiesSearch {
    _id: string;
    _source: { city: string }
}

interface HitsFound {
    hits: CitiesSearch[];
}

interface DataCitiesSearch {
    hits: HitsFound;
}

const Dashboard: React.FC = () => {
    const [cities, setCities] = useState<Cities[]>([]);
    const [ city, setNewCity] = useState('');
    const [weathers, setWeathers] = useState<WeatherData[]>([]);

    useEffect(() => {
        console.log(weathers)
    }, [weathers])

    async function loadWeathers(event: FormEvent<HTMLFormElement>): Promise<void> {

        event.preventDefault();

        await axios.get<WeatherData[]>('http://localhost:3333/weathers/625c13f0-e381-481d-b585-7fae72f199c7/').then( response => {
            // console.log(response.data)
    
            const weather = response.data;

            setWeathers(weather)
            // weather.forEach( w => {
            // })
            
            // console.log(weathers)

        })
    }


    async function handleSearchCity(event: any): Promise<void> {
        setNewCity(event.target.value);

        if(event.target.value === '') {
            console.log(event.target.value, 'ok')
            setCities([])
        }
        else {
            try{
                // const {data} = await api.post<DataCitiesSearch>('/_search?pretty&size=10', {
                //     "query": {
                //       "match_phrase_prefix": {
                //         "city": city
                //       }
                //     }
                //   }
                //   );
                  
                //   console.log(data)
                //   const arrCitities = data.hits.hits.map( data => {
                //       return { id: data._id, city: data._source.city }
                //     })

                //     arrCitities.map( city => {
                //         setCities([...cities,city])      
                //     })
    
                //   console.log(arrCitities)
    
            } catch(err) {
                console.log(err)
            }

        }

    }
    
    return (
        <>
            <NavBar>
                <img src={LogoImg} alt="Clima Tempo" />
            </NavBar>

            <Form onSubmit={e => loadWeathers(e)}>
                <input placeholder="Veja a previsão de sua cidade" onChange={ e => handleSearchCity(e)} />
                <button type="submit" > 
                    <img src={SearchImg} alt="Pesquise a sua cidade"/>
                </button>
            </Form>

            <ListSearch>
                <ul>
                    {cities.map( data => {
                        return (<li key={data.id}>{data.city}</li>)
                    })}
                </ul>
            </ListSearch>

            {/* <h1  >Previsão do Tempo</h1> */}
            <Content>
                {  
                    weathers?.map( weather => {
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