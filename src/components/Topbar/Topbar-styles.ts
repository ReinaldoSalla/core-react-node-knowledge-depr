import styled from 'styled-components';
import { BsLayoutTextSidebar } from 'react-icons/bs';
import { animated } from 'react-spring';

const TopbarInput = styled.input`
  width: 300px;
  border-radius: 20px;
  padding: 10px;
  height: 25px;
  min-width: 70px;
  background-color: rgba(235, 235, 235, 1);
  border: 10px;
  margin: 0px 25px 0px 25px;
  border: 1px solid blue;
`

const TopbarSvg = styled(BsLayoutTextSidebar)`
  color: white;
  font-size: 2.5em;
  transition: color 1000ms;

  &:hover {
    color: aqua;
  }
`;

const TopbarListItem = styled.li`
  width: 300px;
  min-width: 70px;
  padding: 0.5em;
  margin: 0.5em;
  display: flex;
  align-items: center;
  color: white;
  /* border: 1px red solid; */
`;

const TopbarList = styled.ul`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const TopbarNavigation = styled.nav`  
  margin: 0;
  padding: 0;
  background: rgba(0, 0, 0, 0.9);
  height: 70px;
  width: 100%;
  display: inline-block;
  position: fixed; 
`;

const AnimatedTopbarSvg = animated(TopbarSvg);

export { 
  TopbarInput,
  AnimatedTopbarSvg,
  TopbarListItem,
  TopbarList,
  TopbarNavigation 
};