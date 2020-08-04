import styled from 'styled-components';
import { BsLayoutTextSidebar } from 'react-icons/bs';
import { RiSearchEyeLine } from 'react-icons/ri';
import { animated } from 'react-spring';
import { FaUserSecret } from 'react-icons/fa';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';

const defaultMargin = `0px 25px 0px 25px`

const TopbarContainer = styled.div`
  background: #282121;
  height: 80px;
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 3;
`;

const BaseTopbarIcon = `
  color: white;
  min-width: 2.5em;
  min-height: 2.5em;
  transition: color 1000ms;

  &:hover {
    color: aqua;
  }
`;

const TopbarSidebarIcon = styled(BsLayoutTextSidebar)`
  ${BaseTopbarIcon}
`;

const TopbarSidebarAnimatedIcon = animated(TopbarSidebarIcon);

const TopbarSearchIcon = styled(RiSearchEyeLine)`
  ${BaseTopbarIcon}
`;

const TopbarProfileIcon = styled(FaUserSecret)`
  ${BaseTopbarIcon}
`;

const TopbarLogo = styled.span`
  padding: 0.5em;
  font-size: 20px;
  color: white;
  border: 1px solid white;
  border-radius: 2em;
`;

const TopbarInput = styled.input`
  width: 120px;
  border-radius: 20px;
  padding: 10px;
  min-width: 10px;
  background-color: #e3dcdc;
  border: 10px;
  margin: ${defaultMargin};
`;

const TopbarProfile = styled.span`
  background: white;
  min-height: 2.5em;
  min-width: 2.5em;
  border-radius: 50%;
  margin: ${defaultMargin};
`;

export { 
  TopbarContainer,
  TopbarSidebarAnimatedIcon,
  TopbarInput,
  TopbarLogo,
  TopbarProfile,
  TopbarSearchIcon,
  TopbarProfileIcon
};