import React from 'react';

import UpTemperaturaImg from '../../assets/images/icons/upload.png';
import DownTemperaturaImg from '../../assets/images/icons/download.png';
import PrecipitationImg from '../../assets/images/icons/raindrop-close-up.png';
import UmbrellaImg from '../../assets/images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png';

import { Previsao } from './styles';
import formatDate from '../../utils/formatDate';

interface WeatherComponent {
    date: Date;
    text: string;
    temperature: {
        min: number;
        max: number;
    }
    rain: {
        probability: number;
        precipitation: number;
    }
}

const Weather: React.FC<WeatherComponent> = (props: WeatherComponent) => (
    <>
        <Previsao>
                    <h1 className="data">{formatDate(props.date)}</h1>

                    <span className="descricao">
                        <h1>{props.text}</h1>
                    </span>

                    <div className="previsao">
                        <div className="temperatura">
                            <div className="max-temperatura">
                                <img src={UpTemperaturaImg} alt="Alta na temperatura" />
                                <h1>{props.temperature.max}°C</h1>

                            </div>
                            <div className="min-temperatura">
                                <img src={DownTemperaturaImg} alt="Alta na temperatura" />
                                <h1>{props.temperature.min}°C</h1>

                            </div>
                        </div>
                        <div className="informacoes">

                            <div className="precipitacao">
                                <img src={PrecipitationImg} alt="Precipitação" />
                                <h1>{props.rain.precipitation}mm</h1>
                            </div>
                            <div className="probabilidade-chuva">
                                <img src={UmbrellaImg} alt="Probabilida de Chuva" />
                                <h1>{props.rain.probability}%</h1>
                            </div>
                        </div>
                    </div>
                </Previsao>
    </>
)

export default Weather;