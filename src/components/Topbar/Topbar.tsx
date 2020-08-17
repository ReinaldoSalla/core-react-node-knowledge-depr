import React, { 
  Fragment,
  FunctionComponent 
} from 'react';
import {
  TopbarContainer,
  TopbarItemContainer,
  TopbarLink,
  TopbarSidebarAnimatedIcon,
  TopbarSearchIcon,
  TopbarProfileIcon,
  TopbarText,
  TestIcon
} from './Topbar.styles';
import { useSpring } from 'react-spring';
import TopbarProps from './Topbar.interfaces';
import { useLocation } from 'react-router-dom';
import Icon from '../Icon';

const TopbarSidebar: FunctionComponent<TopbarProps> = ({
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
    <TopbarItemContainer onClick={toggleSidebar}>
      <TopbarSidebarAnimatedIcon style={iconAnimation} /> 
      {/* <Icon /> */}
      <TopbarText> Contents </TopbarText>
    </TopbarItemContainer>
  );
};

const TopbarHome: FunctionComponent = () => {
  const { pathname } = useLocation();
  const onClick = () => {
    pathname === '/'
      ? window.scroll({ top: 0, left: 0, behavior: 'smooth' })
      : window.scrollTo(0, 0);
  };
  return (
    <TopbarLink to='/' onClick={onClick}>
      <TestIcon />
      <TopbarText> ABcdefgh</TopbarText>
    </TopbarLink>
  )
}

const Topbar: FunctionComponent<TopbarProps> = ({
  isSidebarVisible, 
  toggleSidebar
}): JSX.Element => (
  <TopbarContainer>
    <TopbarSidebar
      isSidebarVisible={isSidebarVisible}
      toggleSidebar={toggleSidebar}
    />
    <TopbarHome />
    <TopbarItemContainer>
      <TopbarSearchIcon />
      <TopbarText> Search</TopbarText>
    </TopbarItemContainer>
    <TopbarItemContainer>
      <TopbarProfileIcon />
      <TopbarText> Profile </TopbarText>
    </TopbarItemContainer>
  </TopbarContainer>
);

export default Topbar;