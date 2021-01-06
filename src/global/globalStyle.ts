import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    border:0;
    list-style: none;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${colors.grayBg};
    color: #ffffff;
    font-family: 'Open Sans', Helvetica, Sans-Serif;
    overflow: hidden;
  }
`;

export default GlobalStyle;
