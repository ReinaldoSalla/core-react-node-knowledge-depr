import styled from 'styled-components';
import { animated } from  'react-spring';

const CouroselWrapperContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CouroselContainer = styled.div`
  margin: 10px 50px 10px 50px;
  transform: translateY(20%);
  width: 90%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const CouroselItemContainer = styled(animated.div)`
  width: 100%;
  height: 400px;
  font-size: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

const CouroselImg = styled.img`
  width: 100%;
  height: 400px;
  z-index: 1;
`;

const CouroselInputsContainer = styled.div`
  z-index: 2;
  display: flex;
  justify-content: space-evenly;
  transform: translateY(10%);
`;

const CouroselInputContainer = styled(animated.div)`
  border: 2px solid white;
  border-radius: 5px;
  height: 15px;
  width: 50px;
  margin: 15px;

  &:hover {
    cursor: pointer;
    background-color: white
  }
`;

const CouroselInnerInputContainer = styled(animated.div)`
  height: 100%;
`;

export {
  CouroselWrapperContainer,
  CouroselContainer,
  CouroselItemContainer,
  CouroselImg,
  CouroselInputsContainer,
  CouroselInputContainer,
  CouroselInnerInputContainer
};

