// https://stackoverflow.com/questions/56636280/how-to-style-react-icons
// https://stackoverflow.com/questions/62895878/styled-components-and-react-icons-iconcontext-provider-component

import React from 'react';
import { BsLayoutTextSidebar } from 'react-icons/bs';
import { IoLogoJavascript } from 'react-icons/io';
import { ReactComponent as ArrowSvg } from '../../assets/icons/arrow.svg';
import { ReactComponent as BellSvg } from '../../assets/icons/bell.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

const BaseIcon = `
  padding: 1rem;
  height: 64px;
  width: 64px;
  border: 1px solid black;
  border-radius: 50%;
`;

const SidebarIcon = styled(BsLayoutTextSidebar)`${BaseIcon}`;

const JavaScriptIcon = styled(IoLogoJavascript)`${BaseIcon}`;

const ArrowIcon = styled(ArrowSvg)`${BaseIcon}`;

const BellIcon = styled(BellSvg)`${BaseIcon}`;

const IconTester = () => (
  <Wrapper>
    <SidebarIcon />
    <JavaScriptIcon />
    <ArrowIcon />
    <BellIcon />
  </Wrapper>
)

export default IconTester;