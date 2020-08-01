import React from 'react';
import {
	IconContainer,
	JavaScriptIcon,
  ShieldEchoesIcon,
  ReactIcon,
  BackendIcon,
  MobileIcon,
  AiIcon
} from './RoundedIcon.styles';

const BaseRoundedIcon = ({ Icon }) => (
  <IconContainer>
    <Icon />
  </IconContainer>
);

const JavaScriptRoundedIcon = () => (
  <BaseRoundedIcon Icon={JavaScriptIcon} />
);

const ShieldEchoesRoundedIcon = () => (
  <IconContainer>
    <ShieldEchoesIcon offsetX={"2%"} offsetY={"5%"}/>
  </IconContainer>
);

const ReactRoundedIcon = () => (
  <BaseRoundedIcon Icon={ReactIcon} />
);

const BackendRoundedIcon = () => (
  <BaseRoundedIcon Icon={BackendIcon} />
);

const MobileRoundedIcon = () => (
  <BaseRoundedIcon Icon={MobileIcon} />
);

const AiRoundedIcon = () => (
  <IconContainer>
    <AiIcon offsetX={"0%"} offsetY={"-1%"}/>
  </IconContainer>
);

export {
  JavaScriptRoundedIcon,
  ShieldEchoesRoundedIcon,
  ReactRoundedIcon,
  BackendRoundedIcon,
  MobileRoundedIcon,
  AiRoundedIcon
};