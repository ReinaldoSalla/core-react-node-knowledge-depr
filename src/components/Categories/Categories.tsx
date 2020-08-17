import React, { Fragment } from 'react';
import {
  CategoriesContainer,
  CategoriesItemContainer,
  CategoriesHeaderContainer,
  CategoriesTitleText,
  CategoriesDescriptionText,
  CategoriesContentsContainer,
  CategoriesContentContainer,
  CategoriesContentLink,
  CategoriesContentTitleText,
  CategoriesContentDescriptionText
} from './Categories.styles';
import {
  JavaScriptRoundedIcon,
  ShieldEchoesRoundedIcon,
  ReactRoundedIcon,
  BackendRoundedIcon,
  MobileRoundedIcon,
  AiRoundedIcon
} from '../RoundedIcon';
import styled from 'styled-components';
import { IoLogoJavascript } from 'react-icons/io';
import {
  Switch,
  Route,
  Link,
  useLocation,
  useRouteMatch
} from 'react-router-dom';
import routes from '../../routes';
import topics from '../../data/topics';

const CategoriesContent = ({ content }) => (
  <CategoriesContentLink to={content.path}>
    <CategoriesContentTitleText>
      {content.title}
    </CategoriesContentTitleText>
    <CategoriesContentDescriptionText>
      {content.description}
    </CategoriesContentDescriptionText>
  </CategoriesContentLink>
);

const CategoriesContents = ({
  contents
}) => (
  <CategoriesContentsContainer>
    {contents.map((content, index) => 
      <CategoriesContent key={index} content={content} /> 
    )}
  </CategoriesContentsContainer>
);

const CategoriesItem = ({
  Icon,
  title,
  description,
  contents,
  lastItem=false
}) => (
	<CategoriesItemContainer lastItem={lastItem}>
		<CategoriesHeaderContainer>
			<Icon />
      <CategoriesTitleText> 
        {title} 
      </CategoriesTitleText>
      <CategoriesDescriptionText> 
        {description} 
      </CategoriesDescriptionText>
		</CategoriesHeaderContainer>
    <CategoriesContents contents={contents} />
	</CategoriesItemContainer>
);

const Categories = () => {
  return (
    <Fragment>
      <CategoriesContainer>
        <CategoriesItem  
          Icon={JavaScriptRoundedIcon}
          title={topics.javascript.title}
          description={topics.javascript.description}
          contents={topics.javascript.contents}
        />
        <CategoriesItem  
          Icon={ShieldEchoesRoundedIcon}
          title={topics.typescript.title}
          description={topics.typescript.description}
          contents={topics.typescript.contents}
        />
        <CategoriesItem
          Icon={ReactRoundedIcon}
          title={topics.react.title}
          description={topics.react.description}
          contents={topics.react.contents}
        />
        <CategoriesItem 
          Icon={MobileRoundedIcon}
          title={topics.mobile.title}
          description={topics.mobile.description}
          contents={topics.mobile.contents}
        />
        <CategoriesItem 
          Icon={BackendRoundedIcon}
          title={topics.backend.title}
          description={topics.backend.description}
          contents={topics.backend.contents}
        />
        <CategoriesItem 
          Icon={AiRoundedIcon}
          title={topics.ai.title}
          description={topics.ai.description}
          contents={topics.ai.contents}
          lastItem={true}
        />
      </CategoriesContainer>
    </Fragment>
  );
};

export default Categories;
