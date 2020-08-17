import React from 'react';
import { ReactComponent as SidebarTmpSvg } from '../../assets/icons/sidebar.svg';
import { Wrapper, Svg } from './Icon.styles';

const Icon = ({
  wrapperHeight='1rem',
  wrapperWidth='1rem',
  svgHeight='1rem',
  svgWidth='1rem',
  border=false
}) => {
  return (
    <Wrapper height={wrapperHeight} width={wrapperWidth} border={border}>
      <Svg as={SidebarTmpSvg} height={svgHeight} width={svgWidth}/>
    </Wrapper>
  );
};

export default Icon;