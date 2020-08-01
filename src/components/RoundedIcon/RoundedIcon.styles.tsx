import styled from 'styled-components';
import { IoLogoJavascript } from 'react-icons/io';
import { GiShieldEchoes } from 'react-icons/gi';
import { 
  FaReact,
  FaRobot
} from 'react-icons/fa';
import { BsServer } from 'react-icons/bs';
import { GiSmartphone } from 'react-icons/gi'; 
import { CustomIconProps } from './RoundedIcon.interfaces';

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.25em 0 0.5em 0;
  height: 3.5em;
  width: 3.5em;
  border-radius: 50%;
  border: 1px solid black;
`;

const BaseIcon = `
  margin: 10px;
  height: 2.5em;
  width: 2.5em;
`;

const JavaScriptIcon = styled(IoLogoJavascript)`${BaseIcon}`;

const ReactIcon = styled(FaReact)`${BaseIcon}`;

const BackendIcon = styled(BsServer)`${BaseIcon}`;

const MobileIcon = styled(GiSmartphone)`${BaseIcon}`;

const ShieldEchoesIcon = styled(GiShieldEchoes)<CustomIconProps>`
  ${BaseIcon}
  transform: translate(
    ${props => props.offsetX}, 
    ${props => props.offsetY}
  )
`;

const AiIcon = styled(FaRobot)<CustomIconProps>`
  ${BaseIcon}
  transform: translate(
    ${props => props.offsetX}, 
    ${props => props.offsetY}
  )
`;

export {
	IconContainer,
	JavaScriptIcon,
  ShieldEchoesIcon,
  ReactIcon,
  BackendIcon,
  MobileIcon,
  AiIcon
};

