import styled from 'styled-components';

export const NavBar = styled.div`
    display: flex;
    min-width: 350px;
    min-height: 2.5rem;

    background-color: blue;

    justify-content: center;
    align-items: center;

   
    img {
        height: 1.5rem;
    }   
`;

export const Form = styled.form`
    margin: 10px 30px 0px 30px;
    display: flex;
    flex-direction: row;
    place-content: center;
    
    min-width: 300px;

    input {
        min-width: 250px;
        flex: 1;
        padding-left: 5px;
        height: 2rem;
    }

    button {
        img {
            margin-left: 10px;
            height: 1.5rem;
        }
    }
`;

export const ListSearch = styled.div`
    display: flex;
    min-width: 265px;
    margin: 0px 30px;
    background: white;
    height: auto;

    select {
        width: 100%;
    }
    /* border: 1px solid red; */
`;


export const Content = styled.div`
    margin: 10px 30px;
    min-width: 300px;
    height: auto;
    
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto 1fr ;
    gap: 3%;

    @media( max-width: 640px)    {
        display: flex;
        flex-direction: column;
    }

    @media ( min-width: 641px ) and ( max-width: 960px)  {
        
        display: grid;
        grid-template-columns: auto auto ;
        grid-template-rows: auto 1fr ;
        
        height: 100vh;

    }
`;
export const Previsao = styled.div`
    display: flex;
    max-height: 250px;
    padding: 10px;
    flex-direction: column;
    
    background: white;
    
    .data {
            font-size: large;
            padding-bottom: 10px;
        }

    .descricao {
        h1 {
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
