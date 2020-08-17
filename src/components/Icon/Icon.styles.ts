import styled from 'styled-components';
import { WrapperProps, SvgProps } from './Icon.interfaces';

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: ${props => props.height};
  width: ${props => props.width};
  border: ${props => props.border ? '1px solid black' : 'none'};
  border-radius: 50%;
`;

const Svg = styled.div<SvgProps>`
  height: ${props => props.height};
  width: ${props => props.width};
`;

export {
  Wrapper,
  Svg
};

