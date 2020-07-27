import React, { 
  Fragment,
  FunctionComponent 
} from 'react';
import {
  TopbarContainer,
  TopbarAnimatedSvg,
  TopbarInput,
  TopbarLogo,
  TopbarProfile
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
      <TopbarAnimatedSvg style={iconAnimation} onClick={toggleSidebar}/>
    </Fragment>
  );
};

const Topbar: FunctionComponent<TopbarProps> = ({
  isSidebarVisible, 
  toggleSidebar
}): JSX.Element => (
  <Fragment>
    <TopbarContainer>
      <TopbarIcon
        isSidebarVisible={isSidebarVisible}
        toggleSidebar={toggleSidebar}
      />
      <TopbarLogo>
        CompanyLogo
      </TopbarLogo>
      <TopbarSearch />
      <TopbarProfile />
    </TopbarContainer>
  </Fragment>
);

export default Topbar;