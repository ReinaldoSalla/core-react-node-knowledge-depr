import styled from 'styled-components';
import { animated } from 'react-spring';

const SidebarTextContainer = styled.div`
  color: white;
	padding: 0.2em 0 0.2em 0;
`;

const SidebarTitleContainer = styled.div`
  color: aqua;
  font-size: 1.2em;
	padding: 1em 0 0.5em 0;
`;

const SidebarContainerTmp = styled.div`
  background: rgba(0, 0, 0, 0.8);
  width: 200px;
	height: 600px;
  padding: 1em;
  position: fixed;
  top: 70px;
	padding-bottom: 100px;
	margin-bottom: 100px;
	overflow-y: scroll;
	scrollbar-width: thin;
`;

const SidebarContainer = animated(SidebarContainerTmp);

export { 
  SidebarTextContainer,
  SidebarTitleContainer,
  SidebarContainer
};