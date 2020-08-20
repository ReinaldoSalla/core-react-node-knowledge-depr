import styled from 'styled-components';
import { animated } from  'react-spring';
//import galaxy from '../../assets/galaxy.jpg';
import img from '../../assets/imgs/courosel/final/courosel1.jpg';
import {
  CouroselContainerProps,
  FirstCouroselContainerProps
} from './Courosel.interfaces';

const height = '800px';

const CouroselContainer = styled.div<CouroselContainerProps>`
  height: ${props => props.height};
  width: 100%;
  background-image: url(${img});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
`;

const CouroselContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FirstCouroselTitle = styled.div`
  margin: 12rem 0 0 0;
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
`;


const FirstCouroselSubtitle = styled.div`
  margin: 4rem 0 0 0;
  color: white;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

const FirstCouroselContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 4rem 1rem 0 1rem;
  padding: 0.5rem;
  color: white;
  font-size: 2rem;
  border: 1px solid white;
  width: 15rem;
  font-weight: 700;
  border-radius: 20px;
`;

/******************************* */

const CouroselItemContainer = styled(animated.div)`
  width: 100%;
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
  justify-content: space-between;
  /* transform: translateY(-200%); */
  margin: 8rem 5rem 0 5rem;
  padding-bottom: 2rem;
  border-bottom: 3px solid white;
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
  FirstCouroselTitle,
  FirstCouroselSubtitle,
  FirstCouroselContent,
  CouroselContentContainer,
  CouroselItemContainer,
  CouroselImg,
  CouroselInputsContainer,
  CouroselInputContainer,
  CouroselInnerInputContainer,
};