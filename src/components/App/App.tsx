import React, { 
  useState, 
  useEffect,
  Fragment, 
} from 'react';
import Topbar from '../Topbar';
import SimpleTopbar from '../SimpleTopbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import GlobalStyle from './App.styles';
import routes from '../../routes';
import { 
  BrowserRouter, 
  Route, 
  useLocation
} from 'react-router-dom';

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

export default () => (
  <BrowserRouter>
    <GlobalStyle />
    <BaseLayout />
  </BrowserRouter>
);

// import React from 'react';

// export default () => (
//   <div style={{
//     height: '600px',
//     border: '1px solid black',
//     display: 'flex',
//     alignItems: 'flex-end',
//     justifyContent: 'center',
//   }}>
//     <div style={{ 
//       height: '200px',
//       width: '500px',
//       border: '1px solid black',
//       bottom: '0px',
//       left: '0px',
//       margin: '20px'
//      }}>
//       inner
//     </div>
//   </div>  
// )