import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './App.styles';
import Universal from './pages/Universal';

const App = () => (
	<BrowserRouter>
		<GlobalStyle />
		<Universal />  
    {/* <h1>heading level 1</h1>
    <h2>heading level 2</h2>
    <h3>heading level 3</h3>
    <h4>heading level 4</h4> */}
	</BrowserRouter>
);

export default App;