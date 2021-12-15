import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div``;

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
    /* display: flex;
    align-items: center;
    justify-content: center; */
}
.react-modal-content{
    width: 100%;
    max-width: 9rem;
    background: var(--shape);
    position: relative;
    border-radius: 0.25rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    border-radius: 0.25rem;
    li {
    display: flex;
    flex-direction: column;
    position: relative;
    a {
        cursor: pointer;
        padding: 0.5rem 1rem;
        width: 9rem;
        text-decoration: none;
        background: var(--shape);
        transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
    }
}
}

.ReactModal__Overlay--after-open{
    opacity: 1;
    z-index: 1;
}

.ReactModal__Overlay--before-close{
    opacity: 0;
}
`;
