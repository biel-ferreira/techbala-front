import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --background: #30385C;
    --red: #FF3E3E;
    --blue: #1A1C33;
    --green: #32A49A;
    --box: #EBEBF0;
    --text-title: #32264D;
    --text-body: #AEAEB3;
    --shape: #F5F5F5;
    --input: #E6E6F0;
    --dashboard-bg: #E2E2E2;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }
    @media (max-width: 720px) {
        font-size: 87.5%;
    }
  
}
body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}
body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
}
h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}
button{
    cursor: pointer;
}
[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}
.menu-modal-content{
    width: 100%;
    max-width: 300px;
    background: #272D47;
    position: relative;
    border-radius: 0.25rem;
}
.react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
    &:hover{
        filter: brightness(0.5);
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
