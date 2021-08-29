import { createGlobalStyle } from 'styled-components';

import AvenirBook from '../assets/fonts/AvenirLTStd-Book.woff';
import AvenirBook2 from '../assets/fonts/AvenirLTStd-Book.woff2';
import AvenirBlack from '../assets/fonts/AvenirLTStd-Black.woff';
import AvenirBlack2 from '../assets/fonts/AvenirLTStd-Black.woff2';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Avenir';
    src: url(${AvenirBook2}) format('woff2'),
        url(${AvenirBook}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Avenir';
    src: url(${AvenirBlack2}) format('woff2'),
        url(${AvenirBlack}) format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  :root {
    --primary: #FE3E6D;
    --blue: #1A93DA;
    --blue-soft: #EAF7FF;
    --red: #FE3E6D;
    --text: #3B3B3B;
    --text-light: #6B7076;
    --border: #C7CBCF;
    --gray1: #F0F4F8;
    --gray2: #DEE4E9;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html  {
    font-family: 'Avenir', sans-serif;
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }
    @media(max-width: 720px) {
      font-size: 87.5%
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #fff;
  }

  body, input, textarea, button {
    font-family: 'Avenir', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }

  button {
    cursor: pointer;
    border: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`;
