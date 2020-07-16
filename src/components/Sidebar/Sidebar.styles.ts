import styled from 'styled-components';
import { animated } from 'react-spring';

const SidebarTextContainer = styled.nav`
  color: green;
`;

const SidebarTitleContainer = styled.div`
  color: blue;
`;

const SidebarContainer = styled(animated.li)`
  background: red;
  width: 200px;
  padding: 1em;
  position: absolute;
`;

export { 
  SidebarTextContainer,
  SidebarTitleContainer,
  SidebarContainer
};