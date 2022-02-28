import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }
    body {
        width: 100vw;
        height: 100vh;
    }
`