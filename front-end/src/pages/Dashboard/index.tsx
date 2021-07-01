import React from 'react';

import { NavBar, Form, Content, Previsao } from './styles';

import LogoImg from '../../assets/images/logo-white.png';
import SearchImg from '../../assets/images/icons/search.png';
import UpTemperaturaImg from '../../assets/images/icons/upload.png';
import DownTemperaturaImg from '../../assets/images/icons/download.png';
import PrecipitationImg from '../../assets/images/icons/raindrop-close-up.png';
import UmbrellaImg from '../../assets/images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png';
const Dashboard: React.FC = () => {
    return (
        <>
            <NavBar>
                <img src={LogoImg} alt="Clima Tempo" />
            </NavBar>
            
            <Form>
                <input placeholder="Veja a previsão de sua cidade" />
                <button type="submit" > 
                    <img src={SearchImg} alt="Pesquise a sua cidade"/>
                </button>
            </Form>

            <Content>
                <h1  >Previsão do Tempo</h1>

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