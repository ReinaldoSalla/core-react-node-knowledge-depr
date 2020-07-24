import styled from 'styled-components';
import { animated } from 'react-spring';
import { SidebarTitleContainerProps } from './Sidebar.interfaces';
import { Scrollbars } from 'react-custom-scrollbars';

const SidebarTextContainer = styled.div`
  color: white;
	font-size: 1.1em;
	padding: 0.2em 0 0.2em 0;
`;

const SidebarTitleContainer = styled.div<SidebarTitleContainerProps>`
  color: aqua;
  font-size: 1.3em;
	padding: ${props => props.firstTitle ? '0 0 0.1em 0' : '1em 0 0.1em 0'}
`;

interface SidebarContainerProps {
  height?: number;
}

const SidebarContainer = styled.div<SidebarContainerProps>`
  /* background: rgba(14, 12, 12, 0.94); */
  background: #2d2a2a;
  width: 200px;
	height: ${props => props.height};
  /* height: 600px; */
  padding: 1em;
  position: fixed;
  top: 70px;
	padding-bottom: 100px;
	margin-bottom: 100px;
	overflow-y: scroll;
	scrollbar-width: thin;
`;

const SidebarScrollbar = styled(Scrollbars)`
  /* height: 600; */
  /* width: 400; */
  background-color: 'red';
`;

const AnimatedSidebarContainer = animated(SidebarContainer);

export { 
  SidebarTextContainer,
  SidebarTitleContainer,
  AnimatedSidebarContainer,
  SidebarScrollbar
};