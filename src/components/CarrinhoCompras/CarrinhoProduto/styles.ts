import styled from "styled-components";

export const Container = styled.div`
  background: var(--box);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 1rem auto;

  img{
    width: 8rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
  }

  .quantidade{
    display: flex;
    flex-direction: column;
    justify-content: center;
    button{
      display: flex;
      background: transparent;
      border: none;

      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.75);
      }
    }
    img{
      width: 1.5rem;
      filter: invert(34%) sepia(61%) saturate(2619%) hue-rotate(338deg) brightness(101%) contrast(104%);
    }
    div{
      display: flex;
      input{
        width: 1rem;
        background: transparent;
        border: none;
        text-decoration: none;
        text-align: center;
        pointer-events: none;
      }
      button{
        padding: 0.25rem;
        img{
          width: 1rem;
        }
      }
    }
  }

  .flex-column{
    display: flex;
    flex-direction: column;
    span{
      white-space: nowrap;
      padding: 0 0.5rem;
    }
    .span-preco-unidade {
      font-size: 0.85rem;
      font-weight:300;
      color: var(--red);
    }
  }


  @media(max-width: 480px){
    flex-direction: column;
    .quantidade{
      flex-direction: row;
    }
  }
`;