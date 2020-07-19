import styled from 'styled-components';
import { animated } from 'react-spring';

const SidebarTextContainer = styled.div`
  color: white;
`;

const SidebarTitleContainer = styled.div`
  color: aqua;
  font-size: 1.2em;
`;

const SidebarContainerTmp = styled.div`
  background: rgba(0, 0, 0, 0.9);
  width: 200px;
  padding: 1em;
  position: fixed;
  top: 70px;
`;

const SidebarContainer = animated(SidebarContainerTmp);

export { 
  SidebarTextContainer,
  SidebarTitleContainer,
  SidebarContainer
};