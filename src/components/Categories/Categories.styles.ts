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
	margin: 1rem 0 0 0;
	font-size: 2em;
	font-weight: 700;
	text-align: center;
	color: ${textColor};
  /* border: 1px solid black; */
`;

const CategoriesDescriptionText = styled.span`
	margin: 1rem 0 0 0rem;
	font-size: 1.5em;
	font-weight: 700;
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

const CategoriesContentWrapper = styled.div`
  margin: 0 3rem 3rem 3rem;
  height: 350px;
  width: 350px;
  /* border: 1px solid black; */
  box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.1);
  background: #f9f9f9;
  transition: transform 500ms;
  flex: 300px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

`;

export {
	CategoriesItemContainer,
	CategoriesHeaderContainer,
	CategoriesTitleText,
	CategoriesDescriptionText,
  CategoriesContentsWrapper,
  CategoriesContentWrapper
};
