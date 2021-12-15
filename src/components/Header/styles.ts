import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
  width: 100%;
  position: sticky;
  z-index: 1;
  top: 0px;
`;
export const Content = styled.div`
  @media (max-width: 720px) {
    .logo {
      display: none;
    }
  }
  .login {
    margin-left: 1rem;
    cursor: pointer;
    transition: filter 0.2s;
    display: block;
    @media (max-width: 720px) {
    
      display: none;
  
  }
    &:hover {
      filter: brightness(0.6);
    }
  }
  .perfil {
    cursor: pointer;
    margin-left: 1rem;
    width: 5rem;
  }
  .hamblogo {
    display: flex;
    align-items: center;

    .hamburgerlogo {
      cursor: pointer;
      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.6);
      }
    }
    .logo {
      margin-left: 6rem;
      width: 12rem;
    }
  }
  .lupa {
    display: block;
    width: 40%;

    form {
      position: relative;
      width: 100%;
      img {
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 2rem;
        @media (max-width: 720px) {
          width: 0rem;
        }
      }
      input {
        padding: 0 1.5rem;
        background: var(--box);
        /* background-image: url("search.png");
        background-repeat: no-repeat;
        background-position: right center;
        background-size: 2rem; */
        /* margin-right: 7rem; */
        width: 100%;
        height: 4rem;
        border-radius: 0.5rem;
      }
    }
  }

  .iconperfil {
    display: flex;
    align-items: center;
    img {
      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.6);
      }
    }
  }
  width: 100%;
  margin: 0 auto;
  padding: 2rem 2rem 3rem;
  color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .botaoLogout {
    display: inline-block;
    padding: 0 1rem;
    .nome {
      display: block;
      @media (max-width: 720px) {
        display: none;
      }
    }
    .Logout {
      text-decoration: underline;
      color: var(--text-body);
      cursor: pointer;
      transition: filter 0.2s;
      border: none;
      background: transparent;
      float: right;
      &:hover {
        filter: brightness(0.6);
      }
    }
  }
  #foto-usuario {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 5rem;
    height: 5rem;
    overflow: hidden;
    border-radius: 50%;
    outline: 5px solid rgba(255, 255, 255, 0.432);
    outline-offset: -5px;
    margin: 0 auto;
    float: left;
    top: 1em;
    left: 1em;
    cursor: pointer;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.6);
    }
  }
  .carrinho {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    cursor: pointer;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.6);
    }
    p {
      margin-left: 10px;
      margin-bottom: 2px;
    }
  }
  .logo {
    cursor: pointer;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.6);
    }
  }
`;
