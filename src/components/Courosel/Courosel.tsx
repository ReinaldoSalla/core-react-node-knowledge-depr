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
  CouroselInputsRow,
  CouroselInput,
  CouroselInputText,
  CouroselInnerInput,
  CouroselTimerRow,
  CouroselTimer
} from './Courosel.styles';
import { useTransition, useSpring } from 'react-spring';
import useDocumentVisibility from '../../utils/useDocumentVisibility';
import useHeight from '../../utils/useHeight';

const DURATION: number = 8000;

const customConfig = { 
  content: { mass: 5, tension: 50, friction: 26, clamp: true },
  input: { duration: 2000 }
};

const titleGenerator = (name: string): string => (
  `${name} Guides`
);
  
const boxGenerator = (name: string): string => (
  `Check ${name} tutorials`
);
    
const texts = [
  {
    title: titleGenerator('JavaScript'),
    subtitle: 'From data processing to asyncronous programming',
    box: boxGenerator('JS')
  },
  {
    title: titleGenerator('TypeScript'),
    subtitle: 'Covering types, interfaces, generics and decorators',
    box: boxGenerator('TS')
  },
  {
    title: titleGenerator('React'),
    subtitle: 'Concepts from the core library and from third party libraries',
    box: boxGenerator('React')
  },
  {
    title: titleGenerator('Backend'),
    subtitle: 'GraphQL for specification, MongoDB for persistence and JWT for authentication',
    box: boxGenerator('Backend')
  }
];

const CouroselItem = ({ style, title, subtitle, box }) => {
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
          {box}
        </FirstCouroselContent>
      </CouroselContentContainer>
    </CouroselContentWrapper>
  );
};

const couroselItems = texts.map(({ title, subtitle, box }) =>
  ({ style }) => (
    <CouroselItem 
      style={style} 
      title={title}
      subtitle={subtitle} 
      box={box} 
    />
  )
);

const moveToNextItem = (state) => {
  let newIndex = state.index + 1;
	if (newIndex === couroselItems.length) newIndex = 0;
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
  config: customConfig.content,
  trail: 1000,
  from: {
    opacity: 0,
    transform: 'scale(0.1)',
  },
  enter: {
    opacity: 1,
    transform: 'scale(1)',
  },
  leave: {
    opacity: 0,
    transform: 'scale(2)'
  }
};

const getTextProps = (
  currentIndex: number,
  targetIndex: number
): any => ({
  config: customConfig.input,
  color: currentIndex === targetIndex ? 'black' : 'white'
});

const getInnerProps = (
  currentIndex: number, 
  targetIndex: number
): any => ({
  config: customConfig.input,
  background: currentIndex === targetIndex 
    ? 'white' 
    : 'rgba(0, 0, 0, 0)',
  width: currentIndex === targetIndex ? '100%' : '0%',
});

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

  const firstTextAnimation = useSpring(getTextProps(state.index, 0));

  const secondTextAnimation = useSpring(getTextProps(state.index, 1));

  const thirdTextAnimation = useSpring(getTextProps(state.index, 2));

  const forthTextAnimation = useSpring(getTextProps(state.index, 3));

  const firstInnerAnimation = useSpring(getInnerProps(state.index, 0));

  const secondInnerAnimation = useSpring(getInnerProps(state.index, 1));

  const thirdInnerAnimation = useSpring(getInnerProps(state.index, 2));

  const forthInnerAnimation = useSpring(getInnerProps(state.index, 3));

  const { width, opacity }: any = useSpring({
    config: { duration: DURATION + 100 },
    from: { width: 0, opacity: 0 },
    to: { width: 95, opacity: 1 },
    reset: true
  });

  return (
    <Fragment>
      <CouroselContainer height={`${height}px`}>
        {transition.map(({ item, props, key }) => {
          const Page = couroselItems[item]
          return <Page key={key} style={props} />
        })}
        <CouroselInputsWrapper paddingTop={`${height-80-10}px`}>
          <CouroselInputsContainer>
            <CouroselInputsRow>
                <CouroselInput onClick={handleFirstItem}>
                  <CouroselInputText style={firstTextAnimation}>
                    JavaScript
                  </CouroselInputText>
                  <CouroselInnerInput style={firstInnerAnimation} />
                </CouroselInput>
                <CouroselInput onClick={handleSecondItem}>
                  <CouroselInputText style={secondTextAnimation}>
                    TypeScript
                  </CouroselInputText>
                  <CouroselInnerInput style={secondInnerAnimation} />
                </CouroselInput>
                <CouroselInput onClick={handleThirdItem}>
                  <CouroselInputText style={thirdTextAnimation}>
                    React
                  </CouroselInputText>
                  <CouroselInnerInput style={thirdInnerAnimation} />
                </CouroselInput>
                <CouroselInput onClick={handleForthItem}>
                  <CouroselInputText style={forthTextAnimation}>
                    Backend
                  </CouroselInputText>
                  <CouroselInnerInput style={forthInnerAnimation} />
                </CouroselInput>
            </CouroselInputsRow>
            <CouroselTimerRow>
              <CouroselTimer
                style={{
                  width: width.interpolate(width => 
                    width < 20 ? 0 : `${width}%`
                  ),
                  opacity: opacity.interpolate(opacity => 
                    opacity < 0.3 ? 0 : opacity - 0.3
                  )
                }}
              />
            </CouroselTimerRow>
          </CouroselInputsContainer>
        </CouroselInputsWrapper>
      </CouroselContainer>
    </Fragment>
  );
};

export default App;
