import styled from 'styled-components';

export const Title = styled.h1`
    margin: 20px 0px 30px 30px;
`;

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
    min-width: 250px;
    margin: 0px 30px;
    background: white;
    max-height: 250px;
    overflow-y: scroll;
    flex-direction: column;

    div {
        height: 30px;
        width: 100%;
         
        :hover{
                background-color: green;
                transition: 0.2s;
    }

    }
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

