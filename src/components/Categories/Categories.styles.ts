import styled from 'styled-components';
import { Link } from 'react-router-dom';
import img from '../../assets/imgs/boxes/final/box1.jpg';

const textColor = 'black';

interface CategoriesItemContainerProps {
	lastItem?: boolean;
}

const CategoriesItemContainer = styled.div<CategoriesItemContainerProps>`
	/* margin: ${(props) => props.lastItem ? '0 1.5em 1.5em 1.5em' : '0 1.5em 3em 1.5em'}; */
  margin: 1rem 0 0 0;
	/* border: 1px solid black; */
`;

const CategoriesHeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const CategoriesTitleText = styled.span`
	margin: 1rem 1rem 0 1rem;
	font-size: 2.5em;
	font-weight: 700;
	text-align: center;
	color: ${textColor};
  /* border: 1px solid black; */
`;

const CategoriesDescriptionText = styled.span`
	margin: 1rem 1rem 0 1rem;
	font-size: 2rem;
	font-weight: 600;
	text-align: center;
	color: ${textColor};
  /* border: 1px solid black; */
`;

const CategoriesContentsWrapper = styled.div`
  margin: 2em 0 0 0;
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid black; */
`;

const CategoriesContentWrapper = styled(Link)`
  margin: 0 3rem 5rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 350px;
  flex: 300px;
  box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.1);
  background: #fafbfc;
  transition: transform 500ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  &.disabled {
    background: transparent;
    box-shadow: none;
    pointer-events: none;
  }
`;

const CategoriesContentTitle = styled.span`
  margin: 1rem;
  text-align: center;
  font-size: 1.75rem;
`;

const CategoriesContentDescription = styled.span`
  margin: 1rem;
  text-align: center;
  font-size: 1.25rem;
`;

const CategoriesContentCheck = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CategoriesCheckText = styled.span`
  text-align: center;
  text-align: center;
  font-size: 1.25rem;
`;

export {
	CategoriesItemContainer,
	CategoriesHeaderContainer,
	CategoriesTitleText,
	CategoriesDescriptionText,
  CategoriesContentsWrapper,
  CategoriesContentWrapper,
  CategoriesContentTitle,
  CategoriesContentDescription,
  CategoriesContentCheck,
  CategoriesCheckText
};
