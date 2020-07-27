import styled from 'styled-components';
import { BsLayoutTextSidebar } from 'react-icons/bs';
import { animated } from 'react-spring';

const defaultMargin = `0px 25px 0px 25px`

const TopbarContainer = styled.div`
  background: black;
  height: 70px;
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 3;
`;

const TopbarSvg = styled(BsLayoutTextSidebar)`
  color: white;
  font-size: 2.5em;
  transition: color 1000ms;
  margin: ${defaultMargin};

  &:hover {
    color: aqua;
  }
`;

const TopbarAnimatedSvg = animated(TopbarSvg);

const TopbarLogo = styled.span`
  color: white;
  border: 1px solid white;
  border-radius: 2em;
  padding: 0.5em;
  margin: ${defaultMargin};
`;

const TopbarInput = styled.input`
  width: 300px;
  border-radius: 20px;
  padding: 10px;
  min-width: 70px;
  background-color: rgba(235, 235, 235, 1);
  border: 10px;
  border: 1px solid blue;
  margin: ${defaultMargin};
`;

const TopbarProfile = styled.span`
  background: white;
  height: 2.5em;
  width: 2.5em;
  border: 1px solid red;
  border-radius: 50%;
  margin: ${defaultMargin};
`;

export { 
  TopbarContainer,
  TopbarAnimatedSvg,
  TopbarInput,
  TopbarLogo,
  TopbarProfile
};