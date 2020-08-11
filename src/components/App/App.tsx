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
    <Fragment>
      <GlobalStyle />
      <Topbar 
        isSidebarVisible={isSidebarVisible} 
        toggleSidebar={toggleSidebar}
      />
      <Sidebar isSidebarVisible={isSidebarVisible} />
      <Courosel  />
      <Categories />
      <Footer />
    </Fragment>
  );	
};

export default App;