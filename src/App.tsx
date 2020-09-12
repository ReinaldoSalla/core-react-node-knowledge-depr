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
    </ThemeProvider>
  </BrowserRouter>
);

export default App;