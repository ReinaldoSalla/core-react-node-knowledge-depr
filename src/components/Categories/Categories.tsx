import React from 'react';
import {
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
import useResize from '../../utils/useResize';
import Icon from '../Icon';
import { ReactComponent as JavaScriptSvg } from '../../assets/icons/javascript.svg';
import { ReactComponent as ShieldsSvg } from '../../assets/icons/shields.svg';
import { ReactComponent as ReactSvg } from '../../assets/icons/react.svg';
import { ReactComponent as ServerSvg } from '../../assets/icons/server.svg';
import { ReactComponent as RightArrowSvg } from '../../assets/icons/arrow.right.svg';

const Checker = ({ title }) => (   
  <CategoriesContentCheck>
    <CategoriesCheckText>Check {title}</CategoriesCheckText>
    <Icon svg={RightArrowSvg} padding='0' width='22px' height='22px' border='none'/>
  </CategoriesContentCheck>
);

const CategoriesContent = ({ className, path, title, description }) => (
  <CategoriesContentWrapper className={className} to={path}>
    <CategoriesContentTitle>{title}</CategoriesContentTitle>
    <CategoriesContentDescription>{description}</CategoriesContentDescription>
    {className !== 'disabled' && (
      <Checker title={title}/>
    )}
  </CategoriesContentWrapper>
);

const CategoriesContents = ({ contents }) => {
  const { width } = useResize();
  let normalizedContents = contents.map((content) => ({
    ...content,
    className: ''
  }));
  const dummyContent = { path: '', title: '', description: '', className: 'disabled'};
  if (width >= 1135) {
    // 3 columns
    if (normalizedContents.length % 3 === 2) {
      normalizedContents = [...normalizedContents, dummyContent];
    } else if (normalizedContents.length % 3 === 1) {
      normalizedContents = [...normalizedContents, dummyContent, dummyContent];    
    };
    for (let i = normalizedContents.length - 3; i < normalizedContents.length; i++) {
      if (normalizedContents[i].className !== 'disabled') {
        normalizedContents[i] = {
          ...normalizedContents[i],
          className: 'last-row'
        };
      }
    }
  } else if (width < 1135 && width >= 791) {
    // 2 columns
    if (normalizedContents.length % 2 !== 0) {
      normalizedContents = [...normalizedContents, dummyContent];
    }
    for (let i = normalizedContents.length - 2; i < normalizedContents.length; i++) {
      if (normalizedContents[i].className !== 'disabled') {
        normalizedContents[i] = {
          ...normalizedContents[i],
          className: 'last-row'
        };
      }
    }
  } else {
    // 1 column
    if (normalizedContents[normalizedContents.length - 1].className !== 'disabled') {
      normalizedContents[normalizedContents.length - 1] = {
        ...normalizedContents[normalizedContents.length - 1],
        className: 'last-row'
      }
    }
  }
  return (
    <CategoriesContentsWrapper>
      {normalizedContents.map((content, index) => (
        <CategoriesContent 
          key={index} 
          className={content.className}
          path={content.path}
          title={content.title}
          description={content.description}
        />
      ))}
    </CategoriesContentsWrapper>
  );
};

const CategoriesItem = ({
	svg,
	title,
	description,
	contents,
	currentRef,
	lastItem = false,
}) => (
  <>
    <CategoriesHeaderContainer ref={currentRef}>
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
  </>
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
