/*
todo
create the actual content https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiJydadg4TrAhUUIbkGHZPeA-YQFjAAegQIBRAB&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fwebsite%2520background%2F&usg=AOvVaw08xwJ2TViw6zoqosJyED2m
Prevent new items from entering until old items have finished leaving https://github.com/react-spring/react-spring/pull/809 
use a react-spring config instead of duration + d3-ease
create a count state variable for every 100ms, so that the timer can reset when the user clicks in some label or leaves the page
render how long it takes for the next transition
being able to swipe in diferent directions for mobile 
use three.js / react-three-fiber to improve the courosel https://codepen.io/zadvorsky/pen/PNXbGo?editors=1010
use typescript on useReducer and useEffect
*/

import React, {
  useCallback,
  useEffect,
	useReducer,
  Fragment
} from 'react';
import {
  CouroselContainer,
  CouroselItemContainer,
  CouroselImg,
  CouroselInputsContainer,
  CouroselInputContainer,
  CouroselInnerInputContainer
} from './Courosel.styles';
import { useTransition, useSpring } from 'react-spring';
import js1 from '../../assets/javascript.png';
import js2 from '../../assets/js2.jpg';
import js3 from '../../assets/js3.png';import js4 from '../../assets/js4.jpg';
import js5 from '../../assets/js5.jpg';
import galaxy from '../../assets/galaxy.jpg';
import matrix from '../../assets/matrix.jpg';
import * as easings from 'd3-ease';
import useDocumentVisibility from '../../utils/useDocumentVisibility';
import styled from 'styled-components';
import { IoLogoJavascript } from 'react-icons/io';

const DURATION: number = 1e10;

const customConfig = { 
  heavy: { mass: 5, tension: 50, friction: 26, clamp: true },
  easing: { duration: 1500, easing: easings.easeCubic }
};

// const CouroselItem = ({ style, img }) => (
//   <CouroselItemContainer className='courosel-item' style={style}>
//     <CouroselImg className='courosel-img' src={img} alt='' />
//   </CouroselItemContainer>
// );

// const couroselImgs = [js1, js2, js3, js4, js5];

// const couroselItems = couroselImgs.map(item =>
//   ({ style }) => <CouroselItem style={style} img={item} />
// );

// const couroselItems = [
//   ({ style }) => <CouroselItem style={style} img={js1} />,
//   ({ style }) => <CouroselItem style={style} img={js1} />,
//   ({ style }) => <CouroselItem style={style} img={js1} />,
//   ({ style }) => <CouroselItem style={style} img={js1} />,
//   ({ style }) => <CouroselItem style={style} img={js1} />,
// ];

const FirstCouroselItemContainer = styled.div`
  /*background-size mantain the same size as the width changes */
  position: fixed;
  width: 100%;
  height: 600px;
  font-size: 100px;
  position: absolute;
  /* background: #2b1b1b; */
  background-image: url(${galaxy});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FirstCouroselItemTitle = styled.div`
  margin: 2rem 0 0 0;
  color: white;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

const FirstCouroselItemFirstContainer = styled.div`
  display: flex;
`;

const FirstCouroselItemFirstSubtitleText = styled.div`
  margin: 2rem 0 0 0;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
`;

const FirstCouroselItemFirstContentText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 1rem 1rem 0 1rem;
  padding: 0.5rem;
  color: white;
  font-size: 1.5rem;
  border: 1px solid white;
  width: 8rem;
  font-weight: 700;
  border-radius: 20px;
`;
 
const FirstCouroselItem = () => (
  <FirstCouroselItemContainer>
    <FirstCouroselItemTitle>
      JavaScript Guides
    </FirstCouroselItemTitle>

    <FirstCouroselItemFirstSubtitleText>
      Data Processing
    </FirstCouroselItemFirstSubtitleText>
    <FirstCouroselItemFirstContainer>
      <FirstCouroselItemFirstContentText>
        Functions
      </FirstCouroselItemFirstContentText>
    </FirstCouroselItemFirstContainer>

    <FirstCouroselItemFirstSubtitleText>
      Fundamentals
    </FirstCouroselItemFirstSubtitleText>
    <FirstCouroselItemFirstContainer>
      <FirstCouroselItemFirstContentText>
        Closures
      </FirstCouroselItemFirstContentText>
    </FirstCouroselItemFirstContainer>

    <FirstCouroselItemFirstSubtitleText>
      Asyncronous
    </FirstCouroselItemFirstSubtitleText>
    <FirstCouroselItemFirstContainer>

      <FirstCouroselItemFirstContentText>
        Async Await
      </FirstCouroselItemFirstContentText>
    </FirstCouroselItemFirstContainer>


  </FirstCouroselItemContainer>
);


const moveToNextItem = (state) => {
	let newIndex = state.isTimerEnabled
		? state.index + 1
		: state.index;
	if (newIndex === 5) newIndex = 0;
	return {
		index: newIndex,
		isTimerEnabled: true,
	};
};

const moveToFirstItem = () => {
	return {
		index: 0,
		isTimerEnabled: false,
	}
};

const moveToSecondItem = () => {
	return {
		index: 1,
		isTimerEnabled: false,
	}
};

const moveToThirdItem = () => {
	return {
		index: 2,
		isTimerEnabled: false,
	}
};

const moveToForthItem = () => {
	return {
		index: 3,
		isTimerEnabled: false,
	}
};

const moveToFifthItem = () => {
	return {
		index: 4,
		isTimerEnabled: false,
	}
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'MOVE_TO_NEXT_ITEM':
      return moveToNextItem(state);
    case 'MOVE_TO_FIRST_ITEM':
      return moveToFirstItem();
    case 'MOVE_TO_SECOND_ITEM':
      return moveToSecondItem();
    case 'MOVE_TO_THIRD_ITEM':
      return moveToThirdItem();
    case 'MOVE_TO_FORTH_ITEM':
      return moveToForthItem();
    case 'MOVE_TO_FIFTH_ITEM':
      return moveToFifthItem();
    default:
      throw new ReferenceError(`Action type ${action.type} is not declared`);
  };
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { 
		index: 0,
		isTimerEnabled: true,
  });
  const isDocumentVisible: boolean = useDocumentVisibility();

  const handleNextItem = useCallback(() => (
    dispatch({ type: 'MOVE_TO_NEXT_ITEM' })
	), []);
	
  const handleFirstItem = useCallback(() => (
    dispatch({ type: 'MOVE_TO_FIRST_ITEM' })
  ), []);

  const handleSecondItem = useCallback(() => (
    dispatch({ type: 'MOVE_TO_SECOND_ITEM' })
  ), []);

  const handleThirdItem = useCallback(() => (
    dispatch({ type: 'MOVE_TO_THIRD_ITEM' })
  ), []);

  const handleForthItem = useCallback(() => (
    dispatch({ type: 'MOVE_TO_FORTH_ITEM' })
  ), []);

  const handleFifthItem = useCallback(() => (
    dispatch({ type: 'MOVE_TO_FIFTH_ITEM' })
  ), []);

  useEffect(() => {
    if (isDocumentVisible) {
      const intervalId = setInterval(() => {
        handleNextItem();
      }, DURATION);
      return () => clearInterval(intervalId);
    }
	});
	
  const transitions = useTransition(state.index, null, {
    config: customConfig.easing,
    // initial: { opacity: 1 },
    from: { opacity: 0, },
    enter: { opacity: 1 },
    leave: { opacity: 0, },
  });

  const firstInputAnimation = useSpring({
    config: customConfig.easing,
    background: state.index === 0 ? 'white' : 'rgba(0, 0, 0, 0.1)',
    width: state.index === 0 ? '100%' : '0%'
  });

  const secondInputAnimation = useSpring({ 
    config: customConfig.easing,
    background: state.index === 1 ? 'white' : 'rgba(0, 0, 0, 0.1)',
    width: state.index === 1 ? '100%' : '0%'
  });

  const thirdInputAnimation = useSpring({
    config: customConfig.easing,
    background: state.index === 2 ? 'white' : 'rgba(0, 0, 0, 0.1)',
    width: state.index === 2 ? '100%' : '0%'
  });

  const forthInputAnimation = useSpring({
    config: customConfig.easing,
    background: state.index === 3 ? 'white' : 'rgba(0, 0, 0, 0.1)',
    width: state.index === 3 ? '100%' : '0%'
  });

  const fifthInputAnimation = useSpring({
    config: customConfig.easing,
    background: state.index === 4 ? 'white' : 'rgba(0, 0, 0, 0.1)',
    width: state.index === 4 ? '100%' : '0%'
  });

  return (
    <Fragment>
      <CouroselContainer>
        {/* {transitions.map(({ item, props, key }) => {
          const Page = couroselItems[item]
          return <Page key={key} style={props} />
        })} */}
        <FirstCouroselItem />
      </CouroselContainer>
      <CouroselInputsContainer className='courosel-inputs'>
        <CouroselInputContainer onClick={handleFirstItem}>
          <CouroselInnerInputContainer style={firstInputAnimation} />
        </CouroselInputContainer>
        <CouroselInputContainer onClick={handleSecondItem}>
          <CouroselInnerInputContainer style={secondInputAnimation} />
        </CouroselInputContainer>
        <CouroselInputContainer onClick={handleThirdItem}>
          <CouroselInnerInputContainer style={thirdInputAnimation} />
        </CouroselInputContainer>
        <CouroselInputContainer onClick={handleForthItem}>
          <CouroselInnerInputContainer style={forthInputAnimation} />
        </CouroselInputContainer>
        <CouroselInputContainer onClick={handleFifthItem}>
          <CouroselInnerInputContainer style={fifthInputAnimation} />
        </CouroselInputContainer>
      </CouroselInputsContainer>
    </Fragment>
  )
}

export default App;

