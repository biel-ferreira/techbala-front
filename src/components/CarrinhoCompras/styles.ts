import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 2rem auto;
  max-width: 1080px;
  width: 94%;
  background: var(--box);
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;

  button{
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
    height: 3rem;
    padding: 0 1rem;
    
    &.finalizar-compra{
      margin-top: 1rem;
      background: var(--green);
      border-color: var(--green);
    }
    &.Login{
      margin-top: 1rem;
      margin-left: 1rem;
      background: var(--red);
      border-color: var(--red);
    }
    
    &:hover{
      filter: brightness(0.9);
    }
  }

  .flex{
    display: flex;
    img{
      height: 2rem;
      filter: invert(34%) sepia(61%) saturate(2619%) hue-rotate(338deg) brightness(101%) contrast(104%);
    }
    h2{
        margin-left: 1rem;
      }
    &-space-between{
      justify-content: space-between;
    }
  }

  .flex-direction-column{
    display: flex;
    flex-direction: column;
    flex: 12 1 0%;
    gap: 2rem;
    max-width: 60rem;
  }

  .preco-frete{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1rem;
    label {
      display: flex;
      cursor: pointer;
      font-weight: 400;
      position: relative;
      overflow: hidden;
      margin-bottom: 0.375em;
      input {
        position: absolute;
        left: -9999px;
        &:checked + span {
          background-color: mix(#fff, var(--red), 84%);
          &:before {
            box-shadow: inset 0 0 0 0.4375em var(--red);
          }
        }
      }
      span {
        display: flex;
        align-items: center;
        padding: 0.375em 0.75em 0.375em 0.375em;
        border-radius: 99em; // or something higher...
        transition: 0.25s ease;
        &:hover {
          background-color: mix(#fff, var(--red), 84%);
        }
        &:before {
          display: flex;
          flex-shrink: 0;
          content: "";
          background-color: #fff;
          width: 1.5em;
          height: 1.5em;
          border-radius: 50%;
          margin-right: 0.375em;
          transition: 0.25s ease;
          box-shadow: inset 0 0 0 0.125em var(--red);
        }
      }
    }
  }

  section{
    padding: 2rem;
    div{
      align-items: center;
    }
    form{
      margin-top: 2rem;
      input{
        background: transparent none repeat scroll 0% 0%;
        border: 1px solid var(--input);
        border-radius: 0.25rem;
        width: 16rem;
        height: 3rem;
        padding: 0.75rem 1rem;
      }
      button{
        margin: 0 1rem;
      }
    }
  }

  .resumo{
    position: sticky;
    top: 2rem;
    margin-left: 1rem;
    align-self: flex-start;
    padding: 2rem;
  }

  @media (max-width: 625px){
    flex-direction: column;
    .resumo{
      position: unset;
      margin-top: 2rem;
      margin-left: 0;
      width: 100%;
    }
  }
`

export const SectionContainer = styled.div`
  background: var(--shape);
  border-radius: 0.5rem;

`;

export const Subject = styled.div`
  display: flex;
    font-size: 0.75rem;
    align-items: center;
    justify-content: space-between;
    padding: 0.25rem 0.5rem;

    b{
      font-size: 1rem;
      font-weight: 700;
      color: var(--text-title);
    }
`;

export const Divisoria = styled.div`
  width: 100%;
  height: 0.075rem;
  background: red;
`;