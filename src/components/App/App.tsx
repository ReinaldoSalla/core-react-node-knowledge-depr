import React, { 
  useState, 
  useEffect,
  Fragment, 
  FunctionComponent 
} from 'react';
import { useSpring, useTransition, animated, config } from 'react-spring';
import styled from 'styled-components';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar';
import Courosel from '../Courosel';
import Categories from '../Categories';
import Footer from '../Footer';
import GlobalStyle from './App.styles';
import routes from '../../routes';
import { 
  BrowserRouter, 
  Route, 
  Link, 
  Switch, 
  useRouteMatch,
  useLocation
} from 'react-router-dom';
import Icon from '../Icon';
import { ReactComponent as SidebarSvg } from '../../assets/icons/sidebar.svg';
import { ReactComponent as JavaScriptSvg } from '../../assets/icons/javascript.svg';
import { ReactComponent as SearchSvg } from '../../assets/icons/search.svg';
import { ReactComponent as ProfileSvg } from '../../assets/icons/profile.svg';

const BaseLayout = () => {
	const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);
  return (
    <Fragment>
      <Topbar 
        isSidebarVisible={isSidebarVisible} 
        toggleSidebar={toggleSidebar}
      />
      <Sidebar isSidebarVisible={isSidebarVisible} />
      {routes.map((route: any, index) => 
        <Route 
          key={index}
          path={route.path}
          render={props => 
            <route.component 
              {...props} 
              routes={route.routes} 
            />
          }
        />
      )}    
      <Footer /> 
    </Fragment>
  )
};

export default () => (
  <BrowserRouter>
    <GlobalStyle />
    <BaseLayout />
  </BrowserRouter>
);