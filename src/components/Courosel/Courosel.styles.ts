import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import {
	CouroselContainerProps,
	CouroselInputsWrapperProps,
} from './Courosel.types';

const CouroselContainer = styled.div<CouroselContainerProps>`
	height: ${(props) => props.height};
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

const CouroselContentContainer = styled(animated.section)<
	CouroselContentContainerProps
>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	padding-top: 60px;
	height: ${(props) => props.height};
	overflow: hidden;
`;

interface CouroselTextProps {
	name: string;
}

const CouroselTitle = styled(animated.h1)<CouroselTextProps>`
	margin: 0 1rem;
	padding: 0;
	color: white;
	font-size: 3rem;
	font-weight: 700;
	text-align: center;

  ${(props) => props.theme.breakpoints.small} {
    font-size: 2.5rem;
  }

	&:hover {
		cursor: pointer;
	}
`;

const CouroselSubtitle = styled(animated.h2)<CouroselTextProps>`
	margin: 0 2rem;
	padding: 0;
	color: white;
	font-size: 2.5rem;
	font-weight: 700;
	text-align: center;

  ${(props) => props.theme.breakpoints.small} {
    font-size: 2rem;
  }

	&:hover {
		cursor: pointer;
	}
`;

const CouroselContent = styled(animated.div)<CouroselTextProps>`
	width: 190px;
  height: 170px;
	display: flex;
	align-items: center;
	color: white;
	font-size: 2.5rem;
	border: 1px solid white;
	font-weight: 700;
	border-radius: 20px;

	&:hover {
		cursor: pointer;
	}

  ${(props) => props.theme.breakpoints.small} {
    width: 140px;
    height: 120px;
  }
`;

const CouroselContentText = styled(animated.div)<CouroselTextProps>`
  margin: 0 8px 6px 8px;
	vertical-align: middle;
	text-align: center;
	font-size: 2rem;
	z-index: 2;

  ${(props) => props.theme.breakpoints.small} {
    font-size: 1.5rem;
    /* margin: 0 32px 6px 32px; */
  }
`;

const CouroselContentFiller = styled(animated.div)<CouroselTextProps>`
	position: absolute;
	background: #b0b0b0;
	border-radius: 20px;
  height: 170px;

  ${(props) => props.theme.breakpoints.small} {
    display: none;
  }  
`;

const CouroselContentFillerSmall = styled(animated.div)<CouroselTextProps>`
  display: none;
  position: absolute;
  background: #b0b0b0;
  border-radius: 20px;
  height: 120px;

  ${(props) => props.theme.breakpoints.small} {
    display: block;
  }
`;

const CouroselInputsWrapper = styled.div<CouroselInputsWrapperProps>`
	display: flex;
	justify-content: center;
	padding-top: ${(props) => props.paddingTop};
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

const CouroselInputInner = styled(animated.div)`
	height: 100%;
`;

const CouroselInputText = styled(animated.span)`
	position: absolute;
	font-size: 20px;
	width: 100px;
	text-align: center;
`;

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
	CouroselTitle,
	CouroselSubtitle,
	CouroselContent,
  CouroselContentFiller,
  CouroselContentFillerSmall,
	CouroselContentText,
	CouroselContentContainer,
	CouroselContentWrapper,
	CouroselInputsWrapper,
	CouroselInputsRow,
	CouroselInputsContainer,
	CouroselInput,
	CouroselInputText,
	CouroselInputInner,
	CouroselTimerRow,
	CouroselTimer,
};
