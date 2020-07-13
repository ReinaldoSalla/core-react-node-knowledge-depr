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
import { useSpring, animated } from 'react-spring';

// const TopbarItem: FunctionComponent = (): JSX.Element => (

// );

// const TopbarItems: FunctionComponent = (): JSX.Element => (
  
// );

const TopbarContent: FunctionComponent = (): JSX.Element => (
  <h1>test</h1>
);

const TopbarIcon: FunctionComponent = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const iconAnimation = useSpring({
    transform: isVisible ? 'rotate(180deg)' : 'rotate(0deg)' 
  });
  const handleClick = () => setIsVisible(!isVisible);
  return (
    <Fragment>
      <TopbarSvg style={iconAnimation} onClick={handleClick}/>
      {/* { isVisible && <TopbarContent />} */}
    </Fragment>
  );
};

const Topbar: FunctionComponent = (): JSX.Element => (
  <TopbarNavigation>
    <TopbarList>
      <TopbarListItem>
        <TopbarIcon />
      </TopbarListItem>
      <TopbarListItem>b</TopbarListItem>
      <TopbarListItem>c</TopbarListItem>
    </TopbarList>
  </TopbarNavigation>    
);

export default Topbar;