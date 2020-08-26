/*
Universal component rendered throughout the whole app.
*/

import React, { useState, Fragment } from 'react';
import { useLocation } from 'react-router';
import RouteParser from '../../routes/RouteParser';
import Topbar from '../../components/Topbar';
import SimpleTopbar from '../../components/SimpleTopbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import routes from '../../routes';

const Universal = () => {
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
        <RouteParser key={index} {...route} />
      )}    
      <Footer /> 
    </Fragment>
  )
};

export default Universal;

