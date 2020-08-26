import React, { useState, Fragment } from 'react';
import { Route, useLocation } from 'react-router';
import Topbar from '../../components/Topbar';
import SimpleTopbar from '../../components/SimpleTopbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import routes from '../../routes';

const BaseLayout = () => {
	const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);
  const { pathname } = useLocation();
  return (
    <Fragment>
      {pathname === '/'
        ? <Topbar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        : <SimpleTopbar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      }
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

export default BaseLayout;

