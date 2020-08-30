import styled from 'styled-components';
import { animated } from 'react-spring';
import { Link } from 'react-router-dom';

const TopbarContainer = styled(animated.div)`
	/* background: transparent; */
	/* background: black; */
	/* background: #280808; */
	top: 0px;
	height: 80px;
	width: 100%;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	z-index: 2;
`;

const TopbarInnerWrapper = styled(animated.div)`
	background: #280808;
	width: 100%;
	position: fixed;
	z-index: 1;
`;

const TopbarItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 80px;
	width: 400px;
	/* border-right: 1px solid white; */ /* if it's in the top position dont't render the right lines, only render if the user is not in the top*/
	/* transition: background 500ms; */
	z-index: 2;

	/* &:hover {
		background: red;
		cursor: pointer;
	} */
`;

const TopbarLink = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 80px;
	width: 400px;
	/* border-right: 1px solid white; */ /* if it's in the top position dont't render the right lines, only render if the user is not in the top*/
	/* transition: background 500ms; */
	z-index: 2;

	/* &:hover {
		background: red;
		cursor: pointer;
	} */
`;

const TopbarText = styled.span`
	font-size: 1.25rem;
	color: white;
  z-index: 2;
`;

const TopbarFillerWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 2.5rem;
	width: 2.5rem;
`;

const TopbarItemFiller = styled(animated.div)`
  position: fixed;
  height: 80px;
  width: 5%;
  transition: width 500ms;
  border: 1px solid blue;
  background: red;
  z-index: 1;

  &:hover {
    width: 25%;
  }
`;

export {
	TopbarContainer,
	TopbarInnerWrapper,
	TopbarItemContainer,
	TopbarLink,
	TopbarText,
  TopbarFillerWrapper,
  TopbarItemFiller
};
