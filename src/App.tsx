import React from 'react';
import GlobalStyle from './App.styles';
import UniversalPage from './pages/UniversalPage';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <UniversalPage />
  </BrowserRouter>
);

export default App;