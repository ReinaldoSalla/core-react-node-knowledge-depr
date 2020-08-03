import styled from 'styled-components';

const CategoriesContainer = styled.div`
  margin: 100px 0 0.5em 0;
  padding: 0.5em;
`;

const CategoriesItemContainer = styled.div`
  margin: 0 1em 3em 1em;
  border: 1px solid black;
`;

const CategoriesHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CategoriesTitleText = styled.span`
  margin: 0 1em 0.5em 1em;
  margin-bottom: 0.5em;
  font-size: 2em;
  font-weight: 700;
  text-align: center;
`;

const CategoriesDescriptionText = styled.span`
  margin: 0 1em 1em 1em;
  font-size: 1.5em;
  font-weight: 700;
  text-align: center;
`;

const CategoriesContentsContainer = styled.div`
  margin: 0 3em 0 3em;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    margin: 0;
  }
`;

const CategoriesContentContainer = styled.div`
  margin: 0.5em 2em 2em 2em;
  padding: 0.5em;
  border: 1px solid black;
  border-radius: 20px;
  transition: transform 500ms;
  transform: scale(1);
  height: 200px;
  flex: 300px;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    filter: brightness(2);
  }

  @media (max-width: 600px) {
    height: auto;
  }
`;

const CategoriesContentTitleText = styled.div`
  margin: 1.5em 0.25em 1em 0.25em;
  height: 40px;
  font-size: 1.5em;
  text-align: center;
`;  

const CategoriesContentDescriptionText = styled.div`
  margin: 0 0.25em 1.5em 0.25em;
  font-size: 1.25em;
  text-align: center;
`;

export {
  CategoriesContainer,
  CategoriesItemContainer,
  CategoriesHeaderContainer,
  CategoriesTitleText,
  CategoriesDescriptionText,
  CategoriesContentsContainer,
  CategoriesContentContainer,
  CategoriesContentTitleText,
  CategoriesContentDescriptionText
};