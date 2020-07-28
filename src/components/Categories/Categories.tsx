import React from 'react';
import {
  CategoriesContainer,
  CategoriesItemContainer,
  CategoriesItemTitleContainer,
  CategoriesItemTitleName,
  CategoriesItemTitleDescription,
  CategoriesImgContentsContainer,
  CategoriesImg,
  CategoriesItemContentsContainer,
  CategoriesItemContentsItem
} from './Categories.styles';
import img from '../../assets/react.png';
// import contents from '../../data/contents';

const topics = [
  {
    title: 'JavaScript',
    description: 'Curated tutorials from basic to advanced',
    src: img,
    contents: [
      'Data Structures',
      'Functions',
			'Conditionals',
			'Loops',
			'Map',
			'Filter',
      'Reduce',
      'Try Catch',
      'Closures',
			'Iterators',
      'Generators',
      'Callbacks',
			'Promises',
			'Async Await'
    ]
  },
  {
    title: 'TypeScript',
    description: 'Fundamentals for extending JavaScript',
    src: img,
    contents: [
			'Types',
			'Interfaces',
      'Generics',
      'Decorators'
    ]
  },
  {
    title: 'React',
    description: 'Concepts from the popular facebook library',
    src: img,
    contents: [
      'Rendering',
      'Styling',
			'State',
			'Props',
      'Side Effects',
      'Context',
      'Refs',
      'Memoization',
      'Routing',
      'Plots',
      'Animation',
      'Graphics',
      'Videos',
    ]
  },
  {
    title: 'Backend',
    description: 'Extending applications with Node.js and GraphQL',
    src: img,
    contents: [
      'Node',
      'GraphQL',
      'MongoDB',
      'Auth'
    ]
  },
  {
    title: 'Mobile',
    description: 'Creating native apps with React Native',
    src: img,
    contents: [
      'React Native',
      'Sharing Code',
      'Notifications',
      'Camera'
    ],
	},
	{
    title: "Artificial Intelligence",
    description: 'Tackling the big trend in AI today - Deep Learning',
    src: img,
		contents: [
			'Tensorflow',
			'Sentiment Analysis',
			'Chatbot',
			'Facial Recognition'
		]
	},
];

const Categories = () => {
  return (
    <CategoriesContainer>
      {topics.map((topic, index) => 
        <CategoriesItemContainer>
          <CategoriesItemTitleContainer key={index}>
            <CategoriesItemTitleName>
              {topic.title}
            </CategoriesItemTitleName>
            <CategoriesItemTitleDescription>
              {topic.description}
            </CategoriesItemTitleDescription>
          </CategoriesItemTitleContainer>
          <CategoriesImgContentsContainer>
            <CategoriesItemContentsContainer>
              {topic.contents.map((content, index) => 
                <CategoriesItemContentsItem key={index}>
                  {content}
                </CategoriesItemContentsItem>
              )}
            </CategoriesItemContentsContainer>
            <CategoriesImg src={topic.src} alt='' />
          </CategoriesImgContentsContainer>
        </CategoriesItemContainer>
      )}
    </CategoriesContainer>
  )
};

export default Categories;