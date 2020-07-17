import styled from 'styled-components';
import { animated } from 'react-spring';

const SidebarTextContainer = styled.div`
  color: green;
`;

const SidebarTitleContainer = styled.div`
  color: blue;
`;

const SidebarContainerTmp = styled.div`
  background: red;
  width: 200px;
  padding: 1em;
  position: fixed;
  margin-top: 55px;
`;

const SidebarContainer = animated(SidebarContainerTmp);

export { 
  SidebarTextContainer,
  SidebarTitleContainer,
  SidebarContainer
};

