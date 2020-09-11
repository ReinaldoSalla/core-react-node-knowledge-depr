import React, { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './App.styles';
import Universal from './pages/Universal';

const App: FunctionComponent = (): JSX.Element => (
	<BrowserRouter>
		<GlobalStyle />
		<Universal />
	</BrowserRouter>
);

export default App;
