import React from 'react';
import {
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
} from './Categories.styles';
import topics from '../../data/topics';
import Icon from '../Icon';
import { ReactComponent as JavaScriptSvg } from '../../assets/icons/javascript.svg';
import { ReactComponent as ShieldsSvg } from '../../assets/icons/shields.svg';
import { ReactComponent as ReactSvg } from '../../assets/icons/react.svg';
import { ReactComponent as ServerSvg } from '../../assets/icons/server.svg';

const check = 'Learn more ->';

const CategoriesContent = ({ path, title, description }) => (
  <CategoriesContentWrapper to={path}>
    <CategoriesContentTitle>{title}</CategoriesContentTitle>
    <CategoriesContentDescription>{description}</CategoriesContentDescription>
    <CategoriesContentCheck>
      <CategoriesCheckText>{check}</CategoriesCheckText>
    </CategoriesContentCheck>
    {/* <CategoriesContentLink to={path}>
      <CategoriesContentTitleText>{title}</CategoriesContentTitleText>
      <CategoriesContentDescriptionText>
        {description}
      </CategoriesContentDescriptionText>
    </CategoriesContentLink> */}    
  </CategoriesContentWrapper>
);

const CategoriesContents = ({ contents }) => (
	<CategoriesContentsWrapper>
		{contents.map((content, index) => (
      <CategoriesContent 
        key={index} 
        path={content.path}
        title={content.title}
        description={content.description}
      />
		))}
	</CategoriesContentsWrapper>
);

const CategoriesItem = ({
	svg,
	title,
	description,
	contents,
	currentRef,
	lastItem = false,
}) => (
	<CategoriesItemContainer ref={currentRef} lastItem={lastItem}>
		<CategoriesHeaderContainer>
			<Icon
				svg={svg}
				margin="1rem 0 0 0"
				color="black"
				border="1px solid black"
			/>
			<CategoriesTitleText>{title}</CategoriesTitleText>
			<CategoriesDescriptionText>{description}</CategoriesDescriptionText>
		</CategoriesHeaderContainer>
		<CategoriesContents contents={contents} />
	</CategoriesItemContainer>
);

const Categories = ({ javaScriptRef, typeScriptRef, reactRef, graphQLRef }) => {
	return (
		<>
      <CategoriesItem
        svg={JavaScriptSvg}
        title={topics.javascript.title}
        description={topics.javascript.description}
        contents={topics.javascript.contents}
        currentRef={javaScriptRef}
      />
      <CategoriesItem
        svg={ShieldsSvg}
        title={topics.typescript.title}
        description={topics.typescript.description}
        contents={topics.typescript.contents}
        currentRef={typeScriptRef}
      />
      <CategoriesItem
        svg={ReactSvg}
        title={topics.react.title}
        description={topics.react.description}
        contents={topics.react.contents}
        currentRef={reactRef}
      />
      <CategoriesItem
        svg={ServerSvg}
        title={topics.backend.title}
        description={topics.backend.description}
        contents={topics.backend.contents}
        currentRef={graphQLRef}
      />
		</>
	);
};

export default Categories;
