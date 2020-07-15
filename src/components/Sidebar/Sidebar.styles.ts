import styled from 'styled-components';
import { animated } from 'react-spring';

const SidebarTitle = styled.div`
  color: blue;
`;

const SidebarContent = styled.div`
  color: green;
`;

const SidebarContainer = styled(animated.div)`
  background: red;
  width: 200px;
  /* height: 200px; */
  padding: 1em;
  position: absolute;
  /* transform: translateY(-100%); */
`;

export { 
  SidebarTitle,
  SidebarContent,
  SidebarContainer 
};