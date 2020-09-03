import styled from 'styled-components';
import { Link } from 'react-router-dom';

const backgroundColor = '#f2f2f2';
const headerTextColor = 'black';
const contentTextColor = 'black';
const contentTitleTextColor = '#590b0b';

const CategoriesHeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const CategoriesTitleText = styled.span`
	margin: 1rem 1rem 0 1rem;
	font-size: 36px;
	font-weight: 700;
	text-align: center;
	color: ${headerTextColor};
  /* border: 1px solid black; */
`;

const CategoriesDescriptionText = styled.span`
	margin: 1rem 1rem 0 1rem;
	font-size: 25px;
	font-weight: 600;
	text-align: center;
	color: ${headerTextColor};
  /* border: 1px solid black; */
`;

const CategoriesContentsWrapper = styled.div`
  margin: 1rem 3rem 0 3rem;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    margin: 1rem 1rem 0 1rem;
  } 
`;

const CategoriesContentWrapper = styled(Link)`
  margin: 0 2rem 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 350px;
  flex: 280px;
  box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.1);
  background: ${backgroundColor};
  transition: transform 500ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  &.last-row {
    margin: 0 2rem 0 2rem;
  }

  &.disabled {
    margin: 0 2rem 0 2rem;
    background: transparent;
    box-shadow: none;
    pointer-events: none;
  }
`;

const CategoriesContentTitle = styled.span`
  margin: 1rem;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  color: #590b0b;
`;

const CategoriesContentDescription = styled.span`
  margin: 1rem;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #590b0b;
`;

const CategoriesContentCheck = styled.div`
  display: flex;
  align-items: center;
  /* border: 1px solid black; */
  height: 50px;
`;

const CategoriesCheckText = styled.div`
  text-align: center;
  height: 22px;
  margin-right: 8px;
  transform: translateY(-3%);
  color: #590b0b;
  font-weight: 300;
`;

export {
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
