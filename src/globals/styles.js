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
        color: ${COLOR.PRIMARY.BASE};
        overflow-x: hidden;
    }

    ul {
        list-style: none;
        padding-left: 0;
    }

    p {
        max-width: 386px;
    }

    h1, h2, h3, h4 {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 600;
        margin-top: 16px;
        margin-bottom: 40px;
        position: relative;

        &:after {
            content: "";
            position: absolute;
            height: 5px;
            width: 100px;
            bottom: -20px;
            left: -20px;
            background-color: ${COLOR.BRAND.BASE};
        }
    }

    h1 {
        font-size: 35px;
        line-height: 1.2;
        max-width: 350px;
    }

    h2 {
        font-size: 30px;
        line-height: 1.2;
    }
`