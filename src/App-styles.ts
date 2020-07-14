import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    /* height: 100%;
    width: 100%; */
    background: aliceBlue;
    font-family: sans-serif;
  }

  /* body::-webkit-scrollbar {
    width: 0.25rem;
  }

  body::-webkit-scrollbar-track {
    background: #1e1e24;
  }

  body::-webkit-scrollbar-thumb {
    background: #6649b8;
  } */

  #root {
    /* height: 100%;
    width: 100%; */
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;

