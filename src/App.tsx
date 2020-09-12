import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, globalTheme } from './App.styles';
import Universal from './pages/Universal';

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={globalTheme}>
      <GlobalStyle />
      <Universal />
      {/* <div style={{ width: '100%', height: '100%', background: 'red'}}></div> */}
      {/* <div style={{ width: '100%', height: '100%', background: 'blue'}}></div> */}
      {/* <div style={{ width: '100%', height: '100%', background: 'green'}}></div> */}
    </ThemeProvider>
  </BrowserRouter>
);

export default App;