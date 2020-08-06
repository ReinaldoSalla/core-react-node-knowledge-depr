import styled from 'styled-components';
import { BsLayoutTextSidebar } from 'react-icons/bs';
import { RiSearchEyeLine } from 'react-icons/ri';
import { animated } from 'react-spring';
import { FaUserSecret, FaUserAlt } from 'react-icons/fa';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io';

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

const TopbarItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
  /* border: 1px solid red; */
`;

const BaseTopbarIcon = `
  color: white;
  min-width: 2em;
  min-height: 2em;
  transition: color 1000ms;  
  // border: 1px solid white;

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

const TestIcon = styled(IoLogoJavascript)`${BaseTopbarIcon}`;

const TopbarLogo = styled.span`
  font-size: 40px;
  color: white;
  /* border: 1px solid white; */
  /* border-radius: 2em; */
`;

const TopbarText = styled.span`
  font-size: 1.25rem;
  color: white;
`;

export { 
  TopbarContainer,
  TopbarItemContainer,
  TopbarSidebarAnimatedIcon,
  TopbarLogo,
  TopbarSearchIcon,
  TopbarProfileIcon,
  TopbarText,
  TestIcon
};