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
import { useSpring } from 'react-spring';
import TopbarProps from './Topbar.interfaces';
import {
  AnimatedSidebarRoundedIcon
} from '../RoundedIcon';

const TopbarSearch: FunctionComponent = () => (
  <TopbarInput placeholder='e.g. React Three Fiber' />
);

interface TestWrapperProps {
  onClick: () => void;
  style: any;
}

const TestWrapper: FunctionComponent<TestWrapperProps> = ({ 
  onClick,
  style
}) => (
  <TopbarAnimatedSvg onClick={onClick} style={style} />
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
      <TopbarAnimatedSvg style={iconAnimation} onClick={toggleSidebar}/> 
      // <TestWrapper onClick={toggleSidebar} style={iconAnimation}/>
      // <AnimatedSidebarRoundedIcon onClick={() => console.log('a')}/>
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
      CompanyLogo
    </TopbarLogo>
    <TopbarSearch />
    <TopbarProfile />
  </TopbarContainer>
);

export default Topbar;