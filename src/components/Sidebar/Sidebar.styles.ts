import styled from 'styled-components';
import { animated } from 'react-spring';

interface SidebarTitleContainerProps {
	readonly firstTitle?: boolean;
}

const SidebarTextContainer = styled.div`
  color: white;
	font-size: 1.1em;
	padding: 0.2em 0 0.2em 0;
`;

const SidebarTitleContainer = styled.div<SidebarTitleContainerProps>`
  color: aqua;
  font-size: 1.3em;
	padding: ${props => props.firstTitle ? '0 0 0.5em 0' : '1em 0 0.5em 0'}
`;

const SidebarContainer = styled.div`
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

const AnimatedSidebarContainer = animated(SidebarContainer);

export { 
  SidebarTextContainer,
  SidebarTitleContainer,
  AnimatedSidebarContainer
};