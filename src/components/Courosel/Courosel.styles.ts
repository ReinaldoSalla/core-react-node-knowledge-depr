import styled from 'styled-components';
import { animated } from  'react-spring';
import {
  CouroselContainerProps,
  FirstCouroselContainerProps
} from './Courosel.interfaces';

const CouroselContainer = styled.div<CouroselContainerProps>`
  height: ${props => props.height};
  width: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
`;

const CouroselContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: hidden;
`;

interface CouroselContentContainerProps {
  height: string;
}

const CouroselContentContainer = styled(animated.div)<CouroselContentContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 80px;
  height: ${props => props.height};
  overflow: hidden;
`;

const FirstCouroselTitle = styled.div`
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
`;


const FirstCouroselSubtitle = styled.div`
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
  color: white;
  font-size: 2rem;
  border: 1px solid white;
  width: 15rem;
  font-weight: 700;
  border-radius: 20px;
`;

interface CouroselInputsWrapperProps {
  paddingTop: string;
}

const CouroselInputsWrapper = styled.div<CouroselInputsWrapperProps>`
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: ${props => props.paddingTop};
`;

const CouroselInputsContainer = styled.div`
  margin: 0 2rem;
  width: 1200px;
  display: flex;
  flex-direction: column;
`;

const CouroselInputsRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CouroselInput = styled.div`
  height: 30px;
  min-width: 100px;
  border-radius: 5px;
  border: 2px solid white;
  transition: transform 500ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
  
const CouroselInnerInput = styled(animated.div)`
  height: 100%;
`;

const CouroselInputText = styled(animated.span)`
  position: absolute;
  font-size: 20px;
  width: 100px;
  text-align: center;
`

const CouroselTimerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CouroselTimer = styled(animated.div)`
  padding: 14px;
  border-bottom: 3px solid white;
  width: auto;
`;

export {
  CouroselContainer,
  FirstCouroselTitle,
  FirstCouroselSubtitle,
  FirstCouroselContent,
  CouroselContentContainer,
  CouroselContentWrapper,
  CouroselInputsWrapper,
  CouroselInputsRow,
  CouroselInputsContainer,
  CouroselInput,
  CouroselInputText,
  CouroselInnerInput,
  CouroselTimerRow,
  CouroselTimer
};