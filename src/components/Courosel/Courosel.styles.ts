import styled from 'styled-components';
import { animated } from  'react-spring';

const CouroselLabelsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const CouroselLabelContainer = styled(animated.div)`
  border: 2px solid black;
  border-radius: 5px;
  height: 15px;
  width: 50px;
`;

export {
  CouroselLabelsContainer,
  CouroselLabelContainer
};

