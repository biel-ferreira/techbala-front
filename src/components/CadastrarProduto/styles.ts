import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  max-width: 1080px;
  width: 100%;
  background-color: var(--box);
  flex-wrap: wrap;
  padding: 4rem 6rem;
  @media(max-width: 600px){
      padding: 1rem 2rem;
  }
  margin-top: 1rem;
  border-radius: 0.5rem;
  .voltar {
    float: right;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    margin-left: 0.5rem;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.5);
    }
    img {
      width: 2.25rem;
    }
  }

  .contentOne {
    display: flex;
    @media (max-width: 600px) {
      display: block;
    }

    .perfil-image {
      max-width: 20rem;
      height: 20rem;
      @media(max-width: 500px) {
        max-width: 15rem;
        height: 15rem;
        justify-content: center;
    display: flex;
    flex-direction: column;
      }
      @media(max-width: 320px) {
        max-width: 10rem;
        height: 10rem;
      }
      opacity: 1;
      margin: auto;
      cursor: pointer;
      background: no-repeat center;
      background-size: cover;
      &:hover {
        opacity: 0.5;
      }
    }
    .upload {
      height: 1px;
      width: 1px;
      visibility: hidden;
    }
    .contentImg{
        @media(max-width: 600px) {
            margin: 0 auto;
            justify-content: center;
        }
    }
    .contentTwo {
      padding-top: 6rem;
      padding-left: 2rem;
      @media (max-width: 600px) {
        padding-left: 0rem;
        padding-top: 1rem;
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
    }
  }

  .contentThree {
    padding-top: 2rem;
    input {
      width: 100%;
      height: 10rem;
      border-radius: 0.5rem;
      border: 1px solid #d7d7d7;
      background: var(--input);
      font-weight: 400;
      font-size: 1rem;
      &::placeholder {
        padding-left: 2rem;
        color: var(--text-body);
      }
      & + input {
        margin-top: 1rem;
      }
    }
    button[type="submit"] {
      width: 100%;
      padding: 0 1.5rem;
      height: 6rem;
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
  }
`;
