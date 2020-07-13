import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    background: aliceBlue;
    font-family: sans-serif;
  }

  #root {
    height: 100%;
    width: 100%;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;

