import React, { 
  Fragment,
  useState, 
  FunctionComponent 
} from 'react';
import {
  TopbarSvg, 
  TopbarListItem,
  TopbarList,
  TopbarNavigation
} from './Topbar-styles';
import { useSpring, config } from 'react-spring';
import TopbarProps from './Topbar.interfaces';

// const TopbarItem: FunctionComponent = (): JSX.Element => (

// );

// const TopbarItems: FunctionComponent = (): JSX.Element => (
  
// );

const TopbarContent: FunctionComponent = (): JSX.Element => (
  <h1>test</h1>
);

const TopbarIcon: FunctionComponent<TopbarProps> = ({
  isSidebarVisible,
  toggleSidebar
}): JSX.Element => {
  const iconAnimation = useSpring({
    config: config.slow,
    transform: isSidebarVisible ? 'rotate(180deg)' : 'rotate(0deg)' 
  });
  return (
    <Fragment>
      <TopbarSvg style={iconAnimation} onClick={toggleSidebar}/>
      {/* { isSidebarVisible && <TopbarContent />} */}
    </Fragment>
  );
};

const Topbar: FunctionComponent<TopbarProps> = ({
  isSidebarVisible, 
  toggleSidebar
}): JSX.Element => (
  <TopbarNavigation>
    <TopbarList>
      <TopbarListItem>
        <TopbarIcon 
          isSidebarVisible={isSidebarVisible} 
          toggleSidebar={toggleSidebar}
        />
      </TopbarListItem>
      <TopbarListItem>b</TopbarListItem>
      <TopbarListItem>c</TopbarListItem>
    </TopbarList>
  </TopbarNavigation>    
);

export default Topbar;