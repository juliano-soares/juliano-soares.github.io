import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: ${props => props.theme.title === 'light' ? props.theme.colors.white : props.theme.colors.black};;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong, p {
        font-weight: 600;
        color: ${props => props.theme.title === 'light' ? props.theme.colors.black : props.theme.colors.white};;
    }

    li {
        list-style-type: none;
    }

    button {
        color: none;
        background: none;
        border: none;
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`