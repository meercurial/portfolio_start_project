import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';
import bg_wave from '../assets/wave.svg';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: "Be Vietnam Pro" -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
        'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.2;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
    }

    section {
        padding: 100px 0;
    }
    
    header {
        background-color: ${theme.colors.headerBg}
    }

    main {
        background-color: ${theme.colors.mainBg}

     & ::before {
        
      }
    }

    footer {
        background-image: url(${bg_wave});
        padding: 125px 0px;
    }

`;
