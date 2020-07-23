import React, { 
  Fragment,
  FunctionComponent 
} from 'react';
import {
  TopbarInput,
  AnimatedTopbarSvg, 
  TopbarListItem,
  TopbarList,
  TopbarNavigation
} from './Topbar-styles';
import { animated, useSpring, config } from 'react-spring';
import TopbarProps from './Topbar.interfaces';

const TopbarSearch: FunctionComponent = () => (
  <TopbarInput placeholder='e.g. React Three Fiber' />
);

const TopbarIcon: FunctionComponent<TopbarProps> = ({
  isSidebarVisible,
  toggleSidebar,
}): JSX.Element => {
  const iconAnimation = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: async (next) => {
      await next({ transform: isSidebarVisible ? 'rotate(180deg)' : 'rotate(0deg)' })
    }
  });
  return (
    <Fragment>
      <AnimatedTopbarSvg style={iconAnimation} onClick={toggleSidebar}/>
    </Fragment>
  );
};

const Topbar: FunctionComponent<TopbarProps> = ({
  isSidebarVisible, 
  toggleSidebar
}): JSX.Element => (
  <Fragment>
    <TopbarNavigation>
      <TopbarList>
        <TopbarListItem>
          <TopbarIcon 
            isSidebarVisible={isSidebarVisible} 
            toggleSidebar={toggleSidebar}
          />
        </TopbarListItem>
        <TopbarListItem>CompanyLogo</TopbarListItem>
        <TopbarListItem>
          <TopbarSearch />
        </TopbarListItem>
      </TopbarList>
    </TopbarNavigation>    
  </Fragment>
);

export default Topbar;