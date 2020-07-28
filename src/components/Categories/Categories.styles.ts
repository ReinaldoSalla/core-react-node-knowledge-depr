import styled from 'styled-components';

const CategoriesContainer = styled.div`
  padding: 0.5em;
  margin: 100px 50px 0 50px;
  border: 1px solid red;
`;

const CategoriesItemContainer = styled.div`
  padding: 0.5em;
  margin: 0.5em;
  border: 1px solid blue;
`;

const CategoriesItemTitleContainer = styled.div`
  padding: 0.5em;
  margin: 0.5em;
  display: flex;
  border: 1px solid aquamarine;
`;

const CategoriesItemTitleName = styled.span`
  padding: 0.5em;
  margin: 0.5em;
  border: 1px solid green;
`;

const CategoriesItemTitleDescription = styled.span`
  padding: 0.5em;
  margin: 0.5em;
  border: 1px solid gray;
`;

const CategoriesImgContentsContainer = styled.div`
  padding: 0.5em;
  margin: 0.5em;
  display: flex;
  border: 1px solid black;
`;

const CategoriesImg = styled.img`
  padding: 0.5em;
  margin: 0.5em;
  border: 1px solid black;
  /* width: 5000px; */
  /* height: 500px; */
  width: 100%;
  height: 400px;
`;

const CategoriesItemContentsContainer = styled.div`
  padding: 0.5em;
  margin: 0.5em;
  display: flex;
  flex-direction: column;
  border: 1px solid orange;
`;

const CategoriesItemContentsItem = styled.div`
  padding: 0.5em;
  margin: 0.5em;
  border: 1px solid black;
`;

export {
  CategoriesContainer,
  CategoriesItemContainer,
  CategoriesItemTitleContainer,
  CategoriesItemTitleName,
  CategoriesItemTitleDescription,
  CategoriesImgContentsContainer,
  CategoriesImg,
  CategoriesItemContentsContainer,
  CategoriesItemContentsItem
};


