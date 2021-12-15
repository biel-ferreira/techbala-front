import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--box);
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    height: fit-content;
    justify-content: center;
    padding: 0 1.5rem;
    margin: 0.5rem auto;
    border-radius: 0.5rem;
    margin-top: 50px;

    .title{
        display: flex;
        width: 100%;
        margin: 15px;
        font-size: 40px;
        align-items: center;
        justify-content: space-between;
    }
    
    .cardImg{
        margin-right: 5px;
    }
  
    .label{
        width: 100%;
        text-align: center;
        font-size: 25px;
        background-color: var(--shape) ;
    }

    .voltar{
        cursor: pointer;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.5);
        }
    }

`

export const Cartao = styled.div`
    background-color: var(--shape);
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    height: fit-content;
    justify-content: center;
    padding: 0 1.5rem;
    margin-top: 2px;
    margin-bottom: 50px;

    input{
        background-color: var(--input);
        padding: 10px;
        &::placeholder{
            color: var(--text-body);
        }
    }

    /* input[type="date"]:before {
        color: var(--text-body);
        content: attr(placeholder) !important;
        margin-right: 3000px;
        text-align: right;
    }
    input[type="date"]:focus:before {
        content: '' !important;
        margin-right: 0;
    } */

    
    .payForm{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    #nome{
        max-width: 500px;
        width: 100%;
        height: 50px;
        border-style: none;
        border-radius: 5px;
        margin: 25px;
        text-transform: uppercase;
    }
    
    #numeroCartao{
        max-width: 500px;
        width: 100%;height: 50px;
        border-style: none;
        border-radius: 5px;
        margin: 25px;
        text-transform: uppercase;
    }
    
    #validade{
        max-width: 225px;
        width: 100%;
        height: 50px;
        border-style: none;
        border-radius: 5px;
        margin: 25px;
        text-transform: uppercase;
    }
    
    #cvv{
        max-width: 225px;
        width: 100%;
        height: 50px;
        border-style: none;
        border-radius: 5px;
        margin: 25px;
        text-transform: uppercase;
    }
    
    #cpf{
        max-width: 225px;
        width: 100%;
        height: 50px;
        border-style: none;
        border-radius: 5px;
        margin: 25px;
        text-transform: uppercase;
    }
    
    #nasc{
        max-width: 225px;
        width: 100%;
        height: 50px;
        border-style: none;
        border-radius: 5px;
        margin: 25px;
        text-transform: uppercase;
    }
    
    #parcelas{
        width: 100%;
        height: 50px;
        border-style: none;
        border-radius: 5px;
        margin: 25px;
        padding: 10px;
        background-color: var(--input)
    }
    
    .submitBtt{
        width: 200px;
        height: 60px;
        background-color: var(--red);
        border-radius: 5px;
        margin: 25px;
        color: white;
        border-style: none;
        cursor: pointer;
    }
    
`