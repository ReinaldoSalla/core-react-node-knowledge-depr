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
//best linear gradients for background

import React, {
  useCallback,
  useEffect,
	useReducer,
  Fragment
} from 'react';
import {
  CouroselContainer,
  FirstCouroselTitle,
  FirstCouroselSubtitle,
  FirstCouroselContent,
  CouroselContentWrapper,
  CouroselContentContainer,
  CouroselInputsWrapper,
  CouroselInputsContainer,
  CouroselInputContainer,
  CouroselInnerInputContainer,
} from './Courosel.styles';
import { useTransition, useSpring, animated } from 'react-spring';
import * as easings from 'd3-ease';
import useDocumentVisibility from '../../utils/useDocumentVisibility';
import useHeight from '../../utils/useHeight';
import Icon from '../Icon';
import {ReactComponent as JavaScriptSvg} from '../../assets/icons/javascript.svg';

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

// const couroselImgs = [img1, img2, img3, img4, img5];

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

const CouroselItem = ({ style, title, subtitle, button }) => {
  const height = useHeight();
  return (
    <CouroselContentWrapper>
      <CouroselContentContainer 
        style={style} 
        height={`${height-80-100}px`}
      >
        <FirstCouroselTitle>
          {title}
        </FirstCouroselTitle>
        <FirstCouroselSubtitle>
          {subtitle}
        </FirstCouroselSubtitle>
        <FirstCouroselContent>
          {button}
        </FirstCouroselContent>
      </CouroselContentContainer>
    </CouroselContentWrapper>
  );
};

const couroselItems = [
  ({ style }) => <CouroselItem style={style} title='JavaScript Guides' subtitle='From data processing to asyncronous programming' button='Check JS tutorial' />,
  ({ style }) => <CouroselItem style={style} title='JavaScript Guides' subtitle='From data processing to asyncronous programming' button='Check JS tutorial' />,
  ({ style }) => <CouroselItem style={style} title='JavaScript Guides' subtitle='From data processing to asyncronous programming' button='Check JS tutorial' />,
  ({ style }) => <CouroselItem style={style} title='JavaScript Guides' subtitle='From data processing to asyncronous programming' button='Check JS tutorial' />,
];

const moveToNextItem = (state) => {
	let newIndex = state.isTimerEnabled
		? state.index + 1
		: state.index;
	if (newIndex === couroselItems.length + 1) newIndex = 0;
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
    default:
      throw new ReferenceError(`Action type ${action.type} is not declared`);
  };
};

const transitionProps: any = {
  config: customConfig.heavy,
  trail: 1000,
  from: {
    opacity: 0,
    transform: 'scale(0.5)',
  },
  enter: {
    opacity: 1,
    transform: 'scale(1)',
  },
  leave: {
    opacity: 0,
    transform: 'scale(1.5)'
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { 
		index: 0,
		isTimerEnabled: true,
  });
  const isDocumentVisible: boolean = useDocumentVisibility();
  const height = useHeight();  

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

  useEffect(() => {
    if (isDocumentVisible) {
      const intervalId = setInterval(() => {
        handleNextItem();
      }, DURATION);
      return () => clearInterval(intervalId);
    }
	});
	

  const transition = useTransition(state.index, null, { 
    ...transitionProps, 
    order: ['leave', 'enter', 'update'] 
  });

  // const transition = useTransition(state.index, null, {
  //   config: customConfig.easing,
  //   trail: 250,
  //   from: {
  //     opacity: 0,
  //     transform: 'translateX(-20%)',
  //     position: 'absolute'
  //   },
  //   enter: {
  //     opacity: 1,
  //     transform: 'translateX(0%)',
  //   },
  //   leave: {
  //     opacity: 0,
  //     transform: 'translateX(20%)'
  //   }
  // });

  const firstInputAnimation = useSpring({
    config: customConfig.easing,
    background: state.index === 0 ? 'white' : 'rgba(0, 0, 0, 0)',
    width: state.index === 0 ? '100%' : '0%'
  });

  const secondInputAnimation = useSpring({ 
    config: customConfig.easing,
    background: state.index === 1 ? 'white' : 'rgba(0, 0, 0, 0)',
    width: state.index === 1 ? '100%' : '0%'
  });

  const thirdInputAnimation = useSpring({
    config: customConfig.easing,
    background: state.index === 2 ? 'white' : 'rgba(0, 0, 0, 0)',
    width: state.index === 2 ? '100%' : '0%'
  });

  const forthInputAnimation = useSpring({
    config: customConfig.easing,
    background: state.index === 3 ? 'white' : 'rgba(0, 0, 0, 0)',
    width: state.index === 3 ? '100%' : '0%'
  });

  return (
    <Fragment>
      <CouroselContainer height={`${height}px`}>
        {transition.map(({ item, props, key }) => {
          const Page = couroselItems[item]
          return <Page key={key} style={props} />
        })}
        <CouroselInputsWrapper>
          <CouroselInputsContainer>
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
          </CouroselInputsContainer>
        </CouroselInputsWrapper>
      </CouroselContainer>
    </Fragment>
  );
};

export default App;
