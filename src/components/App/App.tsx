import React from 'react';
import GlobalStyle from './App.styles';
import BaseLayout from '../../pages/BaseLayout';
import {  BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <BaseLayout />
  </BrowserRouter>
);

export default App;