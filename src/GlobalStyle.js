import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --purple-primary: #554dde;
        --accent-pink: #f44e77;
        --neutral-light: #f2f6ff;
        --lavender-secondary: #6a6d9e;
        --dark-primary: #16194f;
        --border-colour: #cad6f1;
    }

    *{
        margin: 0px;
        padding: 0px;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        text-decoration: none;
    }

    body {
        background-color: var(--neutral-light);
        color: white;
        font-size: 1.2rem;
    }

    a {
        color: inherit;
    }
    
    p {
        line-height: 1.9rem;
        color: var(--lavender-secondary);
    }

    .secondary-heading {
        font-size: 2.5rem;
        color: var(--purple-primary);
    }

    .small-heading {
        font-size: 2.5rem;
        color: var(--purple-primary);
        text-align: center;
    }

    span {
        color: var(--accent-pink);
    }

    .c-para {
        text-align: center;
    }
`

export default GlobalStyle;