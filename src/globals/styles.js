import { createGlobalStyle } from 'styled-components'
import {COLOR} from "./index";

export const GlobalStyle = createGlobalStyle`

    * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 400;
        line-height: 1.6;
        /* background: ${COLOR.BRAND.BASE}; */
        background: ${COLOR.PRIMARY.BASE};
        color: ${COLOR.PRIMARY.DARK};
        overflow-x: hidden;
    }

    ul {
        list-style: none;
        padding-left: 0;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    blockquote {
        position: relative;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
    }

    p {
        max-width: 386px;
    }

    h1, h2, h3, h4 {
        font-family: 'Rye', cursive;
        font-weight: 700;
        margin-top: 16px;
        margin-bottom: 16px;
    }

    h1 {
        font-size: 35px;
        line-height: 1.2;
        position: relative;
        z-index: 1
    }

    h2 {
        font-size: 30px;
        line-height: 1.3;
        color: ${COLOR.BRAND.BASE};
    }

    h3 {
        font-size: 25px;
        line-height: 1.3;
        color: ${COLOR.BRAND.BASE};
    }
`