import React, { useEffect, useState } from 'react';

import { NavBar, Form, Content, Previsao, ListSearch } from './styles';

import LogoImg from '../../assets/images/logo-white.png';
import SearchImg from '../../assets/images/icons/search.png';
import UpTemperaturaImg from '../../assets/images/icons/upload.png';
import DownTemperaturaImg from '../../assets/images/icons/download.png';
import PrecipitationImg from '../../assets/images/icons/raindrop-close-up.png';
import UmbrellaImg from '../../assets/images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png';

import api from '../../services/api';
import Select from 'react-select';

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


    async function handleSearchCity(event: any): Promise<void> {
        setNewCity(event.target.value);

        if(event.target.value === '') {
            console.log(event.target.value, 'ok')
            setCities([])
        }
        else {
            try{
                const {data} = await api.post<DataCitiesSearch>('/_search?pretty&size=10', {
                    "query": {
                      "match_phrase_prefix": {
                        "city": city
                      }
                    }
                  }
                  );
                  
                  console.log(data)
                  const arrCitities = data.hits.hits.map( data => {
                      return { id: data._id, city: data._source.city }
                  })
    
                  console.log(arrCitities)
                  setCities(arrCitities)      
    
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

            <Form>
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
                <Previsao>
                    <h1 className="data">01/02/2017</h1>

                    <span className="descricao">
                        <h1>Sol com muitass nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.</h1>
                    </span>

                    <div className="previsao">
                        <div className="temperatura">
                            <div className="max-temperatura">
                                <img src={UpTemperaturaImg} alt="Alta na temperatura" />
                                <h1>20°C</h1>

                            </div>
                            <div className="min-temperatura">
                                <img src={DownTemperaturaImg} alt="Alta na temperatura" />
                                <h1>10°C</h1>

                            </div>
                        </div>
                        <div className="informacoes">

                            <div className="precipitacao">
                                <img src={PrecipitationImg} alt="Precipitação" />
                                <h1>10mm</h1>
                            </div>
                            <div className="probabilidade-chuva">
                                <img src={UmbrellaImg} alt="Probabilida de Chuva" />
                                <h1>50%</h1>
                            </div>
                        </div>
                    </div>
                </Previsao>
                <Previsao>
                    <h1 className="data">01/02/2017</h1>

                    <span className="descricao">
                        <h1>Sol com muitass nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.</h1>
                    </span>

                    <div className="previsao">
                        <div className="temperatura">
                            <div className="max-temperatura">
                                <img src={UpTemperaturaImg} alt="Alta na temperatura" />
                                <h1>20°C</h1>

                            </div>
                            <div className="min-temperatura">
                                <img src={DownTemperaturaImg} alt="Alta na temperatura" />
                                <h1>10°C</h1>

                            </div>
                        </div>
                        <div className="informacoes">

                            <div className="precipitacao">
                                <img src={PrecipitationImg} alt="Precipitação" />
                                <h1>10mm</h1>
                            </div>
                            <div className="probabilidade-chuva">
                                <img src={UmbrellaImg} alt="Probabilida de Chuva" />
                                <h1>50%</h1>
                            </div>
                        </div>
                    </div>
                </Previsao>
                <Previsao>
                    <h1 className="data">01/02/2017</h1>

                    <span className="descricao">
                        <h1>Sol com muitass nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.</h1>
                    </span>

                    <div className="previsao">
                        <div className="temperatura">
                            <div className="max-temperatura">
                                <img src={UpTemperaturaImg} alt="Alta na temperatura" />
                                <h1>20°C</h1>

                            </div>
                            <div className="min-temperatura">
                                <img src={DownTemperaturaImg} alt="Alta na temperatura" />
                                <h1>10°C</h1>

                            </div>
                        </div>
                        <div className="informacoes">

                            <div className="precipitacao">
                                <img src={PrecipitationImg} alt="Precipitação" />
                                <h1>10mm</h1>
                            </div>
                            <div className="probabilidade-chuva">
                                <img src={UmbrellaImg} alt="Probabilida de Chuva" />
                                <h1>50%</h1>
                            </div>
                        </div>
                    </div>
                </Previsao>
                <Previsao>
                    <h1 className="data">01/02/2017</h1>

                    <span className="descricao">
                        <h1>Sol com muitass nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.</h1>
                    </span>

                    <div className="previsao">
                        <div className="temperatura">
                            <div className="max-temperatura">
                                <img src={UpTemperaturaImg} alt="Alta na temperatura" />
                                <h1>20°C</h1>

                            </div>
                            <div className="min-temperatura">
                                <img src={DownTemperaturaImg} alt="Alta na temperatura" />
                                <h1>10°C</h1>

                            </div>
                        </div>
                        <div className="informacoes">

                            <div className="precipitacao">
                                <img src={PrecipitationImg} alt="Precipitação" />
                                <h1>10mm</h1>
                            </div>
                            <div className="probabilidade-chuva">
                                <img src={UmbrellaImg} alt="Probabilida de Chuva" />
                                <h1>50%</h1>
                            </div>
                        </div>
                    </div>
                </Previsao>
                <Previsao>
                    <h1 className="data">01/02/2017</h1>

                    <span className="descricao">
                        <h1>Sol com muitass nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.</h1>
                    </span>

                    <div className="previsao">
                        <div className="temperatura">
                            <div className="max-temperatura">
                                <img src={UpTemperaturaImg} alt="Alta na temperatura" />
                                <h1>20°C</h1>

                            </div>
                            <div className="min-temperatura">
                                <img src={DownTemperaturaImg} alt="Alta na temperatura" />
                                <h1>10°C</h1>

                            </div>
                        </div>
                        <div className="informacoes">

                            <div className="precipitacao">
                                <img src={PrecipitationImg} alt="Precipitação" />
                                <h1>10mm</h1>
                            </div>
                            <div className="probabilidade-chuva">
                                <img src={UmbrellaImg} alt="Probabilida de Chuva" />
                                <h1>50%</h1>
                            </div>
                        </div>
                    </div>
                </Previsao>
            </Content>
           
        </>
    )
};

export default Dashboard;