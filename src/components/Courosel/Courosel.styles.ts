import styled from 'styled-components';
import { animated } from  'react-spring';

const height = '600px';


const CouroselContainer = styled.div`
  transform: translateY(16%);
  height: ${height};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* border: 1px solid red; */
`;

const CouroselItemContainer = styled(animated.div)`
  width: 95%;
  height: ${height};
  display: flex;
  font-size: 100px;
  align-items: center;
  justify-content: center;
  position: absolute;
  /* border: 1px solid green; */
`;

const CouroselImg = styled.img`
  width: 100%;
  height: ${height};
  z-index: 1;
`;

const CouroselInputsContainer = styled.div`
  z-index: 2;
  display: flex;
  justify-content: space-evenly;
  transform: translateY(50%);
  margin: 0px 2.6% 0 2.6%;
  /* border: 1px solid purple; */
`;

const CouroselInputContainer = styled(animated.div)`
  border: 2px solid white;
  border-radius: 5px;
  height: 15px;
  width: 50px;
  margin: 10px;

  &:hover {
    cursor: pointer;
    background-color: white
  }
`;

const CouroselInnerInputContainer = styled(animated.div)`
  height: 100%;
`;

export {
  CouroselContainer,
  CouroselItemContainer,
  CouroselImg,
  CouroselInputsContainer,
  CouroselInputContainer,
  CouroselInnerInputContainer
};




