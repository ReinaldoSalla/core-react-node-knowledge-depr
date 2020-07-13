import React, { Fragment, FunctionComponent } from 'react';
import GlobalStyle from './App-styles';
import Topbar from './components/Topbar';

const App: FunctionComponent = (): JSX.Element => (
  <Fragment>
    <GlobalStyle />
    <Topbar />
  </Fragment>
);

export default App;