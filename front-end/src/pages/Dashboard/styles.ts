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
    height: 300px;
    overflow-y: scroll;
    flex-direction: column;

    ul {
        background-color: lightgray;
    }
    div {
        height: 30px;
        width: 100%;
         
        :hover{
                /* border: 1px solid; */
                background-color: green;
                transition: 0.2s;
    }
        /* border: 0;
    /* border: 1px solid red; */
    /* li  {
        label :hover {

        }

    } */
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

