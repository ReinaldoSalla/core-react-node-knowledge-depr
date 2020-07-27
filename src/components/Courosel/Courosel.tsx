/*
todo
convert css to styled-components
the transition has a leak effect sometimes
customConfig.heavy has a bad effect, 
customConfig.heavy does't look right if the user clicks in some label before the transition has finished https://github.com/react-spring/react-spring/pull/809 Prevent new items from entering until old items have finished leaving
create a count state variable, so that the timer can reset when the user clicks in some label or leaves the page
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
import { useTransition, animated, useSpring } from 'react-spring';
import './Courosel.css';
import js1 from '../../assets/js1.png';
import js2 from '../../assets/js2.jpg';
import js3 from '../../assets/js3.png';
import js4 from '../../assets/js4.jpg';
import js5 from '../../assets/js5.jpg';
import * as easings from 'd3-ease';
import { inspect } from '../../utils/inspect';
import useDocumentVisibility from '../../utils/useDocumentVisibility';

const DURATION: number = 1e4;

const customConfig = { 
  heavy: { mass: 5, tension: 50, friction: 26, clamp: true },
  easing: { duration: 1500, easing: easings.easeCubic }
};

const CouroselItem = ({ style, img }) => (
  <animated.div className='courosel-item' style={style}>
    <img className='courosel-img' src={img} alt='' />
  </animated.div>
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
		isOffsetEnabled: true,
	};
};

const moveToFirstItem = () => {
	return {
		index: 0,
		isTimerEnabled: false,
		isOffsetEnabled: true,
	}
};

const moveToSecondItem = () => {
	return {
		index: 1,
		isTimerEnabled: false,
		isOffsetEnabled: true,
	}
};

const moveToThirdItem = () => {
	return {
		index: 2,
		isTimerEnabled: false,
		isOffsetEnabled: true,
	}
};

const moveToForthItem = () => {
	return {
		index: 3,
		isTimerEnabled: false,
		isOffsetEnabled: true,
	}
};

const moveToFifthItem = () => {
	return {
		index: 4,
		isTimerEnabled: false,
		isOffsetEnabled: true,
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

let nCalls = 0;

const App = () => {
  const [state, dispatch] = useReducer(reducer, { 
		index: 0,
		isTimerEnabled: true,
		isOffsetEnabled: false,
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
    initial: { opacity: 1, transform: 'translate3d(0%, 0, 0)', },
    from: { opacity: 1, transform: 'translate3d(-100%,0,0)', },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)',  },
    leave: { opacity: 0, transform: 'translate3d(0,0,0)' },
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
      <div className='courosel-container'>
        <div className="courosel">
          {transitions.map(({ item, props, key }) => {
            const Page = couroselItems[item]
            return <Page key={key} style={props} />
          })}
        </div>
      </div>
      <div className='courosel-inputs-container'>
        <div className='courosel-inputs'>
          <animated.div 
            className='courosel-input' 
            onClick={handleFirstItem}
          >
            <animated.div style={firstInputAnimation} className='first-input-filling' />
          </animated.div>
          <animated.div 
            className='courosel-input' 
            onClick={handleSecondItem} 
          >
            <animated.div style={secondInputAnimation} className='second-input-filling' />
          </animated.div>
          <animated.div 
            className='courosel-input' 
            onClick={handleThirdItem} 
          >
            <animated.div style={thirdInputAnimation} className='third-input-filling' />
          </animated.div>
          <animated.div 
            className='courosel-input' 
            onClick={handleForthItem} 
          >
            <animated.div style={forthInputAnimation} className='forth-input-filling'/>
          </animated.div>
          <animated.div 
            className='courosel-input' 
            onClick={handleFifthItem} 
          >
            <animated.div style={fifthInputAnimation} className='fifth-input-filling'/>
          </animated.div>
        </div>
      </div> 
    </Fragment>
  )
}

export default App;

