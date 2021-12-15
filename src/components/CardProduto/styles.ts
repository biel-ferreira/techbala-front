import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background: var(--box);
  margin: 0.5rem;
  border-radius: 0.5rem;
  width: 200px;
  /* height: 280px; */
  -webkit-transition: -webkit-transform 0.5s ease;
  transition: transform 0.5s ease;
  
  .Comprar {
    width: 100%;
    transition: opacity 0.2s ease-out;
    opacity: 0;
    height: 0;
    overflow: hidden;
    button {
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
      height: 2.5rem;
      width: 12.5rem;
      padding: 0 1rem;
    }
  }
  .ProductPrice {
    display: flex;
    opacity: 1;
    height: auto;
  }
  &:hover {
    
    .ProductPrice {
      transition: opacity 0.2s ease-out;
      opacity: 0;
      height: 0;
      overflow: hidden;
    }
    .Comprar {
      opacity: 1;
      height: auto;
    }
    /* -webkit-transform: scale(1.075); */
    transform: scale(1.075);
  }

  .ImgProduto {
    width: 180px;
    height: 180px;
    background: no-repeat center white;
    background-size: cover;
    margin: 10px;
    cursor: pointer;
  }

  h2 {
    padding: 0;
    font-weight: 400;
    font-size: 0.9375rem;
    text-align: center;
    /* white-space: nowrap; */
    width: 180px;
    height: 3rem;
    margin: 0 auto;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      color: var(--red);
      margin: 0.5rem 1rem;
    }
    img {
      max-width: 2rem;
      margin: 0.5rem 1rem;
    }
  }
  @media (max-width: 400px) {
    width: 260px;
    .ImgProduto {
      width: 240px;
      height: 240px;
      margin: 10px;
    }
  }
`;
