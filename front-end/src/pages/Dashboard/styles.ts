import styled from 'styled-components';

export const NavBar = styled.div`
    display: flex;
    min-width: 350px;
    /* width: 100%; */
    min-height: 2.5rem;

    background-color: blue;

    justify-content: center;
    align-items: center;

   
    img {
        height: 1.5rem;
    }   
`;

export const Form = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    place-content: center;
    padding: 0px 45px;
    min-width: 250px;

    input {

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

export const Content = styled.div`
    margin: 10px 35px;
    min-width: 250px;
    padding: 5px 10px;
`;

export const Previsao = styled.div`
    width: auto;
    height: auto;
    margin-top: 1rem;
    padding: 10px 10px;

    background: lightgray;


    .data {
        font-size: larger;
        padding-bottom: 10px;
    }

    .descricao {
        h1 {
            margin: 5px 0px;
            width: auto;
            font-size: large;
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

                place-content: center;
                align-items: center;

                h1 {
                    margin-left: 25px;
                    font-size: 20px;
                    /* right: 0; */
                }

                img {
                    height: 25px;
                }
            }
            .min-temperatura {
                display: flex;
                width: 50%;

                /* place-content: center; */
                align-items: center;
                h1 {
                    margin-left: 25px;
                    font-size: 20px;
                    /* right: 0; */
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

                place-content: center;
                align-items: center;
                h1 {
                    margin-left: 25px;
                    font-size: 20px;
                }

                img {
                    height: 25px;
                }
            }
            .probabilidade-chuva {
                display: flex;
                width: 50%;

                /* place-content: center; */
                align-items: center;
                h1 {
                    margin-left: 25px;
                    font-size: 20px;
                    /* right: 0; */
                }

                img {
                    height: 25px;
                }
            }

        }
    
    }
`;
