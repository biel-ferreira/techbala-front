import styled, { createGlobalStyle } from "styled-components";

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
    max-width: 576px;
    background: var(--shape);
    padding: 3rem;
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

export const ContainerLogin = styled.form`
  .error{
    display: flex;
    width: 480px;
    justify-content: center;
    padding-top: 1rem;
    span{
      color: red;
    }
  }
  h2 {
    color: var(--text-tittle);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.5rem;
    border: 1px solid #d7d7d7;
    background: var(--input);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }
    & + input {
      margin-top: 1rem;
    }
  }
  a {
    text-decoration: underline;
    color: #8257e5;
    cursor: pointer;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.6);
    }
  }
  .remember {
    width: 100%;
    max-width: 25px;
    color: var(--green);
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.5rem;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter 0.2s;
    font-weight: 600;
    &:hover {
      filter: brightness(0.9);
    }
  }
  .rememberdiv {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .divlist {
    display: flex;
    align-items: center;
    width: 100%;
    input {
      margin-right: 1rem;
    }
  }
  p {
    width: 60%;
    float: right;
  }
  .free {
    width: 20%;
  }
  .callregister {
    margin-top: 10rem;

    width: 100%;
  }
  button {
    img {
      width: 1rem;
    }
  }
  .link {
    text-decoration: underline;
    color: #8257e5;
    cursor: pointer;
    transition: filter 0.2s;
    border: none;
    background: transparent;
    &:hover {
      filter: brightness(0.6);
    }
  }
`;

export const ContainerCadastro = styled.form`
span{
  color: red;
}
  .nome{
    text-transform: uppercase;
  }
  h2 {
    color: var(--text-tittle);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.5rem;
    border: 1px solid #d7d7d7;
    background: var(--input);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }
    & + input {
      margin-top: 1rem;
    }
  }
  a {
    text-decoration: underline;
    color: #8257e5;
    cursor: pointer;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.6);
    }
  }
  .remember {
    width: 100%;
    max-width: 25px;
    color: var(--green);
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.5rem;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter 0.2s;
    font-weight: 600;
    &:hover {
      filter: brightness(0.9);
    }
  }
  .rememberdiv {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .divlist {
    display: flex;
    align-items: center;
    width: 100%;
    input {
      margin-right: 1rem;
    }
  }
  p {
    width: 60%;
    float: right;
  }
  .free {
    width: 20%;
  }
  .callregister {
    margin-top: 10rem;

    width: 100%;
  }
  button {
    img {
      width: 1.5rem;
    }
  }
  .link {
    text-decoration: underline;
    color: #8257e5;
    cursor: pointer;
    transition: filter 0.2s;
    border: none;
    background: transparent;
    &:hover {
      filter: brightness(0.6);
    }
  }
  .descricaoCadastro {
    margin-top: -1rem;
    margin-bottom: 1rem;
  }
  
`;
