import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  display: block;
  max-width: 80rem;
  width: 100%;
  h2{
    font-weight: 600;
  }
  span{
    font-weight: 500;
  }

  .ContentOne {
    display: flex;
    /* flex-direction: column; */
  }
  .price {
    font-size: 1.75rem;
    display: block;
    @media (max-width: 480px) {
      display: block;
      font-size: 1.25rem;
    }
    .preco{
      display: flex;
      span{
        padding-right: 0.5rem;
      }
    }
    .estoque{
      margin-top: -4rem;
      @media (max-width: 480px) {
      margin-top: 0rem;
    }
    }
    .colorprice {
      color: green;
    }
  }
  img {
    max-width: 20rem;
    width: 100%;
  }
  .Titulo-Img {
    display: flex;
    flex-direction: column;
    width: 100%;

    align-items: center;
    /* padding-right: 15rem; */
  }
  .informacoes {
    margin-left: 1rem;
    div {
      padding-bottom: 2.25rem;
    }
    @media (max-width: 480px) {
      div {
        padding-bottom: 0rem;
      }
    }
    width: 80%;
    height: 100%;
  }
  .Tecnicas {
    display: block;
  }
  .especificacoes {
    padding-top: 2rem;
    padding-bottom: 2rem;
    width: 100%;
  }
  .comprar {
    justify-content: center;
    align-items: center;
    border: 1px solid var(--red);
    border-radius: 0.25rem;
    background: var(--red);
    color: var(--input);
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    transition: filter 0.3s;
    height: 4rem;
    width: 100%;
    margin-top: 0rem;
    padding: 1rem;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ModalStyled = createGlobalStyle`
    .react-modal-overlay{
    
    background: rgba(0,0,0, 0.5);   
    opacity: 0;
    transition: opacity 250ms ease-in-out;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.react-modal-content{
    width: 100%;
    max-width: 65rem;
    background: var(--shape);
    padding: 2rem;
    position: relative;
    border-radius: 0.25rem;
}

.ReactModal__Overlay--after-open{
    opacity: 1;
    z-index: 1;
}

.ReactModal__Overlay--before-close{
    opacity: 0;
}
`;
