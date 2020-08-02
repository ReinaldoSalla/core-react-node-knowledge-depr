import styled from 'styled-components';
import { IoLogoJavascript } from 'react-icons/io';
import { GiShieldEchoes } from 'react-icons/gi';

const CategoriesContainer = styled.div`
  margin: 100px 0 100px 0;
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

const CategoriesIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.25em 0 0.5em 0;
  height: 3.5em;
  width: 3.5em;
  border-radius: 50%;
  border: 1px solid black;
`;

const CategoriesBaseIcon = `
  margin: 10px;
  height: 2.5em;
  width: 2.5em;
`;

const CategoriesJavaScriptIcon = styled(IoLogoJavascript)`
  ${CategoriesBaseIcon}
`;

const CategoriesShieldEchoesIcon = styled(GiShieldEchoes)`
  ${CategoriesBaseIcon}
`;

const CategoriesTitleText = styled.span`
  margin: 0 1em 0.5em 1em;
  margin-bottom: 0.5em;
  font-size: 2em;
  font-weight: 700;
  text-align: center;
  /* border: 1px solid black; */
`;

const CategoriesDescriptionText = styled.span`
  margin: 0 1em 1em 1em;
  font-size: 1.5em;
  font-weight: 700;
  text-align: center;
  /* border: 1px solid black; */
`;

const CategoriesContentsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  /* border: 1px solid black; */
`;

const CategoriesContentContainer = styled.div`
  /* display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center; */
  margin: 0.5em 2em 2em 2em;
  padding: 0.5em;
  border: 1px solid black;
  border-radius: 20px;
  transition: transform 500ms;
  transform: scale(1);
  width: 300px;
  height: 200px;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    filter: brightness(2);
  }

  @media (max-width: 800px) {
    margin: 0.5em 2em 2em 2em;
  }
`;

const CategoriesContentTitleText = styled.div`
  margin: 2em 0.25em 1em 0.25em;
  height: 40px;
  font-size: 1.5em;
  text-align: center;
  /* border: 1px solid black; */

  /* @media (max-width: 800px) {
    margin: 0.5em 0.25em 0.5em 0.25em;
  } */
`;  

const CategoriesContentDescriptionText = styled.div`
  /* margin: 1em 0.25em 2em 0.25em; */
  font-size: 1.25em;

  text-align: center;
  /* border: 1px solid black; */
  /* white-space: pre-line;; */

  /* @media (max-width: 800px) {
    margin: 0.5em 0.25em 0.5em 0.25em;
  } */
`;

export {
  CategoriesContainer,
  CategoriesItemContainer,
  CategoriesHeaderContainer,
  CategoriesIconContainer,
  CategoriesJavaScriptIcon,
  CategoriesShieldEchoesIcon,
  CategoriesTitleText,
  CategoriesDescriptionText,
  CategoriesContentsContainer,
  CategoriesContentContainer,
  CategoriesContentTitleText,
  CategoriesContentDescriptionText
};

