/*
Universal component rendered throughout the whole app.
*/

import React, { useState, Fragment } from 'react';
import RouteParser from '../../routes/RouteParser';
import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import routesConfig from '../../routes/routes-config';

const Universal = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);
	const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);
	return (
		<Fragment>
      <Topbar 
        isSidebarVisible={isSidebarVisible} 
        toggleSidebar={toggleSidebar} 
      />
      <main>
        <Sidebar isSidebarVisible={isSidebarVisible} />
        {routesConfig.map((route: any, index) => (
          <RouteParser key={index} {...route} />
        ))}        
      </main>
			<Footer />
		</Fragment>
	);
};

export default Universal;
