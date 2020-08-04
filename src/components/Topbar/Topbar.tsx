import React, { 
  Fragment,
  FunctionComponent 
} from 'react';
import {
  TopbarContainer,
  TopbarSidebarAnimatedIcon,
  TopbarLogo,
  TopbarSearchIcon,
  TopbarProfileIcon
} from './Topbar-styles';
import { useSpring } from 'react-spring';
import TopbarProps from './Topbar.interfaces';

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
      <TopbarSidebarAnimatedIcon style={iconAnimation} onClick={toggleSidebar}/> 
  );
};

const Topbar: FunctionComponent<TopbarProps> = ({
  isSidebarVisible, 
  toggleSidebar
}): JSX.Element => (
  <TopbarContainer>
    <TopbarIcon
      isSidebarVisible={isSidebarVisible}
      toggleSidebar={toggleSidebar}
    />
    <TopbarLogo>
      JSE
    </TopbarLogo>
    <TopbarSearchIcon />
    <TopbarProfileIcon />
  </TopbarContainer>
);

export default Topbar;