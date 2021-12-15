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
    
    .label{
        display: flex;
        width: 100%;
        height: fit-content;
        margin: 1rem;
        font-size: 40px;
        @media(max-width: 400px){
            font-size: 20px;
        }
    }
    @media (max-width: 1080px) {
    margin: 0.5rem;
    }

`
export const InfoPessoal = styled.div`
    background-color: var(--shape);
    display: flex;
    margin: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 600px;
    width: 100%;
    height: fit-content;

    .perfil-image{
        width: 175px;
        height: 175px;
        opacity: 1;
        margin: auto;
        cursor: pointer;
        &:hover{
            opacity: 0.5;
        }
    }
    
    .upload{
        height: 1px;
        width: 1px;
        visibility: hidden;
    }

    .text-info{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        flex-wrap: wrap;
        margin-left: 10px;
        max-width: 300px;
        width: 100%;
        
        .box{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 80px;
            @media(max-width: 400px){
            }
            .config-btt{
                margin-top: 5px;
                margin-left: 40px;
                margin-right: 4px;
                cursor: pointer;
                height: 30px;
                width: 30px;
            }
        }
    }
    
`

export const InfoPagamentos = styled.div`
    background-color: var(--shape);
    display: flex;
    flex-wrap: wrap;
    max-width: 480px;
    width: 100%;
    margin: 1rem;
    height: fit-content;

    .pagamentos{
        width: 100%;
        text-align: center;
    }

    .textCard{
        margin: 24.5px;
    }
`
export const InfoPedidos = styled.div`
    background-color: var(--shape);
    display: flex;
    margin: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1200px;
    width: 100%;
    height: fit-content;

    .barra{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .pedidosBar{
        width: 25%;
        text-align: center;
        @media(max-width: 400px){
            font-size: 80%;
        }
    }

    .pedidos{
        margin-top: 20px;
        width: 25%;
        text-align: center;
        @media(max-width: 400px){
            font-size: 80%;
        }
    }
`

export const InfoContato = styled.div`
    background-color: var(--shape);
    display: flex;
    @media(max-width: 400px){
        display: block;
    }
    margin: 1rem;
    margin-top: 2rem;
    margin-bottom: 4rem;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 1200px;
    width: 100%;

    height: fit-content;

    .box1{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        height: 80px;
        @media(max-width: 400px){
        margin-top: 1rem;
        display: block;
        }
    }


`