import styled from 'styled-components';
import { IoLogoJavascript } from 'react-icons/io';

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
  margin-top: 1em;
  font-weight: 700;
  font-size: ${titleSize};
  text-align: center;
  /* border: 1px solid green; */
`;

const CategoriesItemTitleDescription = styled.span`
  /* padding: 0.25rem; */
  margin: 1em;
  font-weight: 700;
  font-size: 1.5em;
  text-align: center;
  /* border: 1px solid gray; */
`;

const CategoriesItemContentsContainer = styled.div`
  /* padding: 0.5em; */
  /* margin: 0.25em; */
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* border: 1px solid orange; */
`;

const CategoriesItemContentsItem = styled.div`
  padding: 0.5em;
  margin: 0.5em;
  /* max-width: 1000px; */
  /* height: 200px; */
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* flex: 10em; */
  /* font-size: 1.25em; */
  /* background: yellow; */
  border: 1px solid black;
`;

const CategoriesContentsTitle = styled.span`
  /* padding: 0.25em;
  margin: 0.25em; */
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: 1.5em;
  text-align: center;
  /* border: 1px solid black; */
`;

const CategoriesContentsDescription = styled.span`
  /* padding: 0.25em;
  margin: 0.25em; */
  font-size: 1.25em;
  text-align: center;
  margin-bottom: 1em;
  /* border: 1px solid black; */
`;

export {
  CategoriesContainer,
  CategoriesItemContainer,
  CategoriesItemTitleName,
  CategoriesItemTitleDescription,
  CategoriesItemContentsContainer,
  CategoriesItemContentsItem,
  CategoriesContentsTitle,
  CategoriesContentsDescription
};
