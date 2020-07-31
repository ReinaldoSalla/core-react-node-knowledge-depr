// import styled from 'styled-components';
// import { IoLogoJavascript } from 'react-icons/io';
// import { GiShieldEchoes } from 'react-icons/gi';

// const titleSize = '2em';

// const icon = `
//   padding: 0.5em;
//   margin-top: 1em;
//   height: 2em;
//   width: 2em;
//   border-radius: 50%;
//   border: 1px solid black;
// `;

// const tmpIcon = `
//   padding: 0.5em;
//   margin-top: 1em;
//   font-size: 1.5em;
//   border-radius: 25%;
//   border: 1px solid black;
// `;

// const CategoriesContainer = styled.div`
//   padding: 0.5em;
//   margin: 100px 50px 0 50px;
//   /* border: 1px solid red; */
// `;

// const CategoriesItemContainer = styled.div`
//   padding: 0.5em;
//   margin: 3em 0.5em 3em 0.5em;
//   border: 1px solid blue;
//   display: flex;
//   flex-direction: column;
// `;

// const CategoriesTitleSvgContainer = styled.div`
//   /* margin: 0;
//   padding: 0; */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   /* border: 1px solid black; */
// `; 

// const CategoriesJavaScriptSvg = styled(IoLogoJavascript)`${icon}`;

// const CategoriesTypeScriptSvg = styled(GiShieldEchoes)`${icon}`;

// const CategoriesJavaScriptTmpSvg = styled.span`${tmpIcon}`;

// const CategoriesItemTitleName = styled.span`
//   /* padding: 0.25em; */
//   /* margin: 0.25em; */
//   margin-top: 0.5em;
//   font-weight: 700;
//   font-size: ${titleSize};
//   text-align: center;
//   /* border: 1px solid green; */
// `;

// const CategoriesItemTitleDescription = styled.span`
//   /* padding: 0.25rem; */
//   margin: 1em;
//   font-weight: 700;
//   font-size: 1.5em;
//   text-align: center;
//   /* border: 1px solid gray; */
// `;

// const CategoriesItemContentsContainer = styled.div`
//   /* padding: 0.5em; */
//   /* margin: 0.25em; */
//   display: flex;
//   /* flex-wrap: wrap; */
//   flex-direction: column;
//   justify-content: center;
//   /* align-items: center; */
//   /* border: 1px solid orange; */
// `;

// const CategoriesItemContentsItem = styled.div`
//   padding: 0.5em;
//   margin: 0.5em;
//   /* max-width: 1000px; */
//   /* height: 200px; */
//   min-height: 150px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   /* flex: 10em; */
//   /* font-size: 1.25em; */
//   /* background: yellow; */
//   border: 1px solid black;
// `;

// const CategoriesContentsTitle = styled.span`
//   /* padding: 0.25em;
//   margin: 0.25em; */
//   margin-top: 0.5em;
//   margin-bottom: 1em;
//   font-size: 1.5em;
//   text-align: center;
//   /* border: 1px solid black; */
// `;

// const CategoriesContentsDescription = styled.span`
//   /* padding: 0.25em;
//   margin: 0.25em; */
//   font-size: 1.25em;
//   text-align: center;
//   margin-bottom: 1em;
//   /* border: 1px solid black; */
// `;

// export {
//   CategoriesContainer,
//   CategoriesItemContainer,
//   CategoriesTitleSvgContainer,
//   CategoriesJavaScriptSvg,
//   CategoriesJavaScriptTmpSvg,
//   CategoriesTypeScriptSvg,
//   CategoriesItemTitleName,
//   CategoriesItemTitleDescription,
//   CategoriesItemContentsContainer,
//   CategoriesItemContentsItem,
//   CategoriesContentsTitle,
//   CategoriesContentsDescription
// };

import styled from 'styled-components';
import { IoLogoJavascript } from 'react-icons/io';
import { GiShieldEchoes } from 'react-icons/gi';

const CategoriesContainer = styled.div`
  margin: 100px 0 100px 0;
  padding: 0.5em;
`;

const CategoriesItemContainer = styled.div`
  margin: 0 1em 0 1em;
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

const CategoriesContentItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5em 2em 2em 2em;
  padding: 0.5em;
  border: 1px solid black;
  border-radius: 20px;
`;

const CategoriesContentTitleText = styled.span`
  margin: 0.5em 0.25em 0.5em 0.25em;
  /* padding: 0.5em; */
  font-size: 1.5em;
  text-align: center;
  /* border: 1px solid black; */
`;  

const CategoriesContentDescriptionText = styled.span`
  margin: 0.5em 0.25em 0.5em 0.25em;
  /* padding: 0.5em; */
  font-size: 1.25em;
  text-align: center;
  /* border: 1px solid black; */
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
  CategoriesContentItemContainer,
  CategoriesContentTitleText,
  CategoriesContentDescriptionText
};

