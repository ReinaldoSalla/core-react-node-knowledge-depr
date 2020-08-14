import React, { 
  useState, 
  useEffect,
  Fragment, 
  FunctionComponent 
} from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar';
import Courosel from '../Courosel';
import Categories from '../Categories';
import Footer from '../Footer';
import GlobalStyle from './App.styles';
import IconTester from '../IconTester';
import routes from '../../routes';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

const App: FunctionComponent = (): JSX.Element => {
	const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);
	
		// useEffect(() => {
		//   const intervalId = setInterval(() => {
		//     toggleSidebar()
		//   }, 500)
		//   return () => clearInterval(intervalId);
		// });

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Topbar 
        isSidebarVisible={isSidebarVisible} 
        toggleSidebar={toggleSidebar}
      />
      <Sidebar isSidebarVisible={isSidebarVisible} />
      {/* <Route path={routes.home.path}> */}
        <routes.home.page />
      {/* </Route> */}
      <Footer />
    </BrowserRouter>
  );	
};

export default App;