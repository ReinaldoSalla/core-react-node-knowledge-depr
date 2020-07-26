/*
todo
1-click the last one https://stackoverflow.com/questions/53895676/how-to-use-lodash-to-throttle-multiple-buttons-with-1-throttle
// solution with styled components without throttle
  1-separate index from timer, zero the timer when the user clicks on index, also pass a props pointer-events: none when the animation in running, but see if it can mantain the mouse cursor: pointer
	2-create complex state management, where the reducer-action checks the timer before changing the index, essentially separate the timer and the index and do complicated things with both 
	3-why 0px and not 0% or just 0

using history is a better solution then using timers, because with timers i have to keep guessing how long the animation took,

4-user goes to another page and comes back seens to thigger the courosel
5-relashion between timer and inputs, because now it seens one breaks the other, maybe use lodash's throttle
5-sometimes, during the transformX the img locks a little, it's a little but it's visible, maybe try other configs, or use ease-3e
5-reducing the size of the buttons with flexbox insted of hardcoding media queies
*/

import React, {
  useCallback,
  useEffect,
	useReducer,
	useRef,
  Fragment
} from 'react';
import { useTransition, animated, useSpring } from 'react-spring';
import './App.css';
import js1 from '../../assets/js1.png';
import js2 from '../../assets/js2.jpg';
import js3 from '../../assets/js3.png';
import js4 from '../../assets/js4.jpg';
import js5 from '../../assets/js5.jpg';

const DURATION: number = 5000;
const OFFSET: number = 1500;

const customConfig = { 
  heavy: { mass: 5, tension: 50, friction: 26, clamp: true }
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

const disableOffset = (state) => ({
	...state,
	isOffsetEnabled: false,
})

const moveToNextItem = (state) => {
	let newIndex = state.isTimerEnabled && !state.isOffsetEnabled
		? state.index + 1
		: state.index;
	if (newIndex === 5) newIndex = 0;
	return {
		index: newIndex,
		isTimerEnabled: true,
		isOffsetEnabled: true,
	};
};

const moveToFirstItem = (state) => {
	const newIndex = !state.isOffsetEnabled ? 0 : state.index;
	return {
		index: newIndex,
		isTimerEnabled: false,
		isOffsetEnabled: true,
	}
};

const moveToSecondItem = (state) => {
	const newIndex = !state.isOffsetEnabled ? 1 : state.index;
	return {
		index: newIndex,
		isTimerEnabled: false,
		isOffsetEnabled: true,
	}
};

const moveToThirdItem = (state) => {
	const newIndex = !state.isOffsetEnabled ? 2 : state.index;
	return {
		index: newIndex,
		isTimerEnabled: false,
		isOffsetEnabled: true,
	}
};

const moveToForthItem = (state) => {
	const newIndex = !state.isOffsetEnabled ? 3 : state.index;
	return {
		index: newIndex,
		isTimerEnabled: false,
		isOffsetEnabled: true,
	}
};

const moveToFifthItem = (state) => {
	const newIndex = !state.isOffsetEnabled ? 4 : state.index;
	return {
		index: newIndex,
		isTimerEnabled: false,
		isOffsetEnabled: true,
	}
};

const reducer = (state, action) => {
  switch (action.type) {
		case 'DISABLE_OFFSET':
			return disableOffset(state);
    case 'MOVE_TO_NEXT_ITEM':
      return moveToNextItem(state);
    case 'MOVE_TO_FIRST_ITEM':
      return moveToFirstItem(state);
    case 'MOVE_TO_SECOND_ITEM':
      return moveToSecondItem(state);
    case 'MOVE_TO_THIRD_ITEM':
      return moveToThirdItem(state);
    case 'MOVE_TO_FORTH_ITEM':
      return moveToForthItem(state);
    case 'MOVE_TO_FIFTH_ITEM':
      return moveToFifthItem(state);
    default:
      throw new ReferenceError(`Action type ${action.type} is not declared`);
  };
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { 
		index: 0,
		isTimerEnabled: true,
		isOffsetEnabled: false,
	});

	const handleOffset = useCallback(() => {
		dispatch({ type: 'DISABLE_OFFSET' });
	}, []);

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
		if (state.isOffsetEnabled) {
			const intervalId = setTimeout(() => {
				handleOffset();
			}, OFFSET);
			return () => clearInterval(intervalId);
		}
	});

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextItem();
    }, DURATION);
    return () => clearInterval(intervalId);
	}, [handleNextItem]);
	
  const transitions = useTransition(state.index, p => p, {
	  config: customConfig.heavy,
    initial: { opacity: 1, transform: 'translate3d(0%, 0, 0)', },
    from: { opacity: 1, transform: 'translate3d(-100%,0,0)', },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)',  },
    leave: { opacity: 0, transform: 'translate3d(0%,0,0)' },
  });

  const firstInputAnimation = useSpring({
    config: customConfig.heavy,
    background: state.index === 0 ? 'white' : 'rgba(0, 0, 0, 0.1)',
    width: state.index === 0 ? '100%' : '0%'
  });

  const secondInputAnimation = useSpring({ 
    config: customConfig.heavy,
    background: state.index === 1 ? 'white' : 'rgba(0, 0, 0, 0.1)',
    width: state.index === 1 ? '100%' : '0%'
  });

  const thirdInputAnimation = useSpring({
    config: customConfig.heavy,
    background: state.index === 2 ? 'white' : 'rgba(0, 0, 0, 0.1)',
    width: state.index === 2 ? '100%' : '0%'
  });

  const forthInputAnimation = useSpring({
    config: customConfig.heavy,
    background: state.index === 3 ? 'white' : 'rgba(0, 0, 0, 0.1)',
    width: state.index === 3 ? '100%' : '0%'
  });

  const fifthInputAnimation = useSpring({
    config: customConfig.heavy,
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
			<br /> <br /> <br />
      <h1>index: {state.index}</h1>
			<h1>isTimerEnabled: {state.isTimerEnabled ? 'true' : 'false'}</h1>
			<h1>isOffsetEnabled: {state.isOffsetEnabled ? 'true' : 'false'}</h1>
    </Fragment>
  )
}

export default App;