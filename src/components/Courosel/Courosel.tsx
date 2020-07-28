/*
todo
Prevent new items from entering until old items have finished leaving https://github.com/react-spring/react-spring/pull/809 
use a react-spring config instead of duration + d3-ease
create a count state variable for every 100ms, so that the timer can reset when the user clicks in some label or leaves the page
render how long it takes for the next transition
being able to swipe in diferent directions for mobile 
use three.js / react-three-fiber to improve the courosel
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
import js1 from '../../assets/js1.png';
import js2 from '../../assets/js2.jpg';
import js3 from '../../assets/js3.png';
import js4 from '../../assets/js4.jpg';
import js5 from '../../assets/js5.jpg';
import * as easings from 'd3-ease';
import useDocumentVisibility from '../../utils/useDocumentVisibility';

const DURATION: number = 1e10;

const customConfig = { 
  heavy: { mass: 5, tension: 50, friction: 26, clamp: true },
  easing: { duration: 1500, easing: easings.easeCubic }
};

const CouroselItem = ({ style, img }) => (
  <CouroselItemContainer className='courosel-item' style={style}>
    <CouroselImg className='courosel-img' src={img} alt='' />
  </CouroselItemContainer>
);

const couroselImgs = [js1, js2, js3, js4, js5];

const couroselItems = couroselImgs.map(item =>
  ({ style }) => <CouroselItem style={style} img={item} />
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
    initial: { opacity: 1 },
    from: { opacity: 0, },
    enter: { opacity: 1, },
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
        {transitions.map(({ item, props, key }) => {
          const Page = couroselItems[item]
          return <Page key={key} style={props} />
        })}
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

