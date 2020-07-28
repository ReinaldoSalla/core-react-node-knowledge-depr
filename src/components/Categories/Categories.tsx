import React from 'react';
import {
  CategoriesContainer,
  CategoriesItemContainer,
  CategoriesItemTitleContainer,
  CategoriesItemTitleName,
  CategoriesItemTitleDescription,
  CategoriesItemContentsContainer,
  CategoriesItemContentsItem
} from './Categories.styles';
// import contents from '../../data/contents';

const topics = [
  {
    title: 'JavaScript',
    description: 'Curated tutorials from basic to advanced',
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
          <CategoriesItemContentsContainer>
            {topic.contents.map((content, index) => 
              <CategoriesItemContentsItem key={index}>
                {content}
              </CategoriesItemContentsItem>
            )}
          </CategoriesItemContentsContainer>
        </CategoriesItemContainer>
      )}
    </CategoriesContainer>
  )
};

export default Categories;