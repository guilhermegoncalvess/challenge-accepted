import styled from 'styled-components';

export const Previsao = styled.div`
    display: flex;
    max-height: 250px;
    max-width: 500px;
    padding: 10px;
    flex-direction: column;
    border-radius: 10px;
    border: 1px solid black ;
    box-shadow: 1px 2px 2px 2px black;
    background: white;

    opacity: 100% ;
    /* filter: blur(); */
    .data {
            /* font-size: larger; */
            padding-bottom: 10px;

        }

    .descricao {
        h1 {
            font: 25px 'Helvetica Neue', Helvetica, Arial, sans-serif;
            margin: 5px 0px;
            width: auto;
            font-size: small;
            padding-bottom: 10px;

        }
    }

    .previsao {
        display: flex;
        flex-direction: column;
        height: auto;
        margin: 10px 0px;


        .temperatura {
            display: flex;
            width: 100%;

            .max-temperatura {
                display: flex;
                width: 50%;

                align-items: center;

                h1 {
                    color: red;
                    margin-left: 25px;
                    font-size: 20px;
                }

                img {
                    height: 20px;
                }
            }
            .min-temperatura {
                display: flex;
                width: 50%;

                align-items: center;
                h1 {
                    
                    color: #0288D1;
                    margin-left: 25px;
                    font-size: 20px;
 
                }

                img {
                    height: 25px;
                }
            }
        }

        .informacoes {
            
            display: flex;
            margin-top: 30px;
            
            .precipitacao {
                
                display: flex;
                width: 50%;

                align-items: center;
                h1 {
                    margin-left: 20px;
                    font-size: 20px;

                }

                img {
                    height: 25px;
                }
            }
            .probabilidade-chuva {
                display: flex;
                width: 50%;

                align-items: center;
                h1 {
                    margin-left: 25px;
                    font-size: 20px;

                }

                img {
                    height: 25px;
                }
            }

        }

    }
        
    @media( max-width: 640px)
    {   
        min-width: 280px;
        margin-bottom: 15px;

        .data {
            font-size: large;
            padding-bottom: 10px;
        }

        .descricao {
            h1 {
                margin: 5px 0px;
                width: auto;
                font-size: x-small;
                padding-bottom: 10px;
            }
        }

        .previsao {
            display: flex;
            flex-direction: column;
            height: auto;
            margin: 10px 0px;


            .temperatura {
                display: flex;
                width: 100%;

                .max-temperatura {
                    display: flex;
                    width: 50%;

                    align-items: center;

                    h1 {
                        margin-left: 25px;
                        font-size: 20px;
                    }

                    img {
                        height: 20px;
                    }
                }
                .min-temperatura {
                    display: flex;
                    width: 50%;

                    align-items: center;
                    h1 {
                        margin-left: 25px;
                        font-size: 20px;
                    }

                    img {
                        height: 25px;
                    }
                }
            }

            .informacoes {
                
                display: flex;
                margin-top: 30px;
                
                .precipitacao {
                    
                    display: flex;
                    width: 50%;

                    align-items: center;
                    h1 {
                        margin-left: 20px;
                        font-size: 20px;
                    }

                    img {
                        height: 25px;
                    }
                }
                .probabilidade-chuva {
                    display: flex;
                    width: 50%;

                    align-items: center;
                    h1 {
                        margin-left: 25px;
                        font-size: 20px;
                    }

                    img {
                        height: 25px;
                    }
                }

            }

        }
        
    }

    @media( min-width: 641px ) and ( max-width: 860px) 
    {

        min-width: 200px;
        .data {
            font-size: large;
            padding-bottom: 10px;
        }

        .descricao {
            h1 {
                margin: 5px 0px;
                width: auto;
                font-size: x-small;
                padding-bottom: 10px;
            }
        }

        .previsao {
            display: flex;
            flex-direction: column;
            height: auto;
            margin: 10px 0px;


            .temperatura {
                display: flex;
                width: 100%;

                .max-temperatura {
                    display: flex;
                    width: 50%;

                    align-items: center;

                    h1 {
                        margin-left: 25px;
                        font-size: 25px;
                    }

                    img {
                        height: 20px;
                    }
                }
                .min-temperatura {
                    display: flex;
                    width: 50%;

                    align-items: center;
                    h1 {
                        margin-left: 25px;
                        font-size: 25px;
                    }

                    img {
                        height: 25px;
                    }
                }
            }

            .informacoes {
                
                display: flex;
                margin-top: 30px;
                
                .precipitacao {
                    
                    display: flex;
                    width: 50%;

                    align-items: center;
                    h1 {
                        margin-left: 20px;
                        font-size: 25px;
                    }

                    img {
                        height: 25px;
                    }
                }
                .probabilidade-chuva {
                    display: flex;
                    width: 50%;

                    align-items: center;
                    h1 {
                        margin-left: 25px;
                        font-size: 25px;
                    }

                    img {
                        height: 25px;
                    }
                }

            }

        }
        
    }
    
`;