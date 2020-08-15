import React, { 
  useState, 
  useEffect,
  Fragment, 
  FunctionComponent 
} from 'react';
import { useSpring, useTransition, animated } from 'react-spring';
import styled from 'styled-components';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar';
import Courosel from '../Courosel';
import Categories from '../Categories';
import Footer from '../Footer';
import GlobalStyle from './App.styles';
import IconTester from '../IconTester';
import routes from '../../routes';
import { 
  BrowserRouter, 
  Route, 
  Link, 
  Switch, 
  useRouteMatch,
  useLocation
} from 'react-router-dom';

const transitionProps: any = {
  trail: 250,
  from: { opacity: 0, transform: 'scale3d(0.5, 0.5, 0.5)', position: 'absolute' },
  enter: { opacity: 1, transform: 'scale3d(1, 1, 1)' },
  leave: { opacity: 0, transform: 'scale3d(1.5, 1.5, 1.5)' },   
};

const homeToContent: any = {
  trail: 250,
  from: {
    opacity: 0,
    transform: 'scale3d(0.5, 0.5, 0.5)',
    position: 'absolute'
  },
  enter: {
    opacity: 1,
    transform: 'scale3d(1, 1, 1)',
  },
  leave: {
    opacity: 0,
    transform: 'translateX(20%)'
  }
};

const Home: any = () => {
  const { path } = useRouteMatch();
  const location = useLocation();
  
  const transitions = useTransition(
    location, 
    location => location.pathname, 
    { ...homeToContent, order: ['leave', 'enter', 'update'] }        
  );

  console.log(location.pathname);

  return transitions.map(({ item: pathname, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={pathname}>
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
      </Switch>
    </animated.div>
  ))
};

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
      <Route path='/'>
        <Home />
      </Route>
    </Fragment>
  )
};

export default () => (
  <BrowserRouter>
    <GlobalStyle />
    <BaseLayout />
  </BrowserRouter>
);