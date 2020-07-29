import styled from 'styled-components';

const titleSize = '2em';

const CategoriesContainer = styled.div`
  padding: 0.5em;
  margin: 100px 50px 0 50px;
  /* border: 1px solid red; */
`;

const CategoriesItemContainer = styled.div`
  padding: 0.5em;
  margin: 3em 0.5em 3em 0.5em;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
`;

const CategoriesItemTitleName = styled.span`
  /* padding: 0.25em; */
  /* margin: 0.25em; */
  font-weight: 700;
  font-size: ${titleSize};
  text-align: center;
  /* border: 1px solid green; */
`;

const CategoriesItemTitleDescription = styled.span`
  /* padding: 0.25rem; */
  margin: 0.25em;
  font-weight: 700;
  font-size: 1.5em;
  text-align: center;
  /* border: 1px solid gray; */
`;

const CategoriesItemContentsContainer = styled.div`
  /* padding: 0.5em; */
  /* margin: 0.25em; */
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  justify-content: center;
  /* border: 1px solid orange; */
`;

const CategoriesItemContentsItem = styled.span`
  padding: 0.5em;
  margin: 0.5em;
  border: 1px solid black;
  width: 100px;
  text-align: center;
  flex: 10em;
`;

export {
  CategoriesContainer,
  CategoriesItemContainer,
  CategoriesItemTitleName,
  CategoriesItemTitleDescription,
  CategoriesItemContentsContainer,
  CategoriesItemContentsItem
};
