import React from 'react';
import {
  CategoriesContainer,
  CategoriesItemContainer,
  CategoriesTitleSvgContainer,
  CategoriesJavaScriptSvg,
  CategoriesJavaScriptTmpSvg,
  CategoriesTypeScriptSvg,
  CategoriesItemTitleName,
  CategoriesItemTitleDescription,
  CategoriesItemContentsContainer,
  CategoriesItemContentsItem,
  CategoriesContentsTitle,
  CategoriesContentsDescription
} from './Categories.styles';
// import contents from '../../data/contents';
import { IoLogoJavascript } from 'react-icons/io';

const topics = [
  {
    title: 'JavaScript',
    icon: <CategoriesJavaScriptSvg/>,
    description: 'Curated tutorials from basic to advanced',
    contents: [
      { title: 'Data Structures', description: 'Understanting JavaScript data types, such as booleans, strings, numbers, nulls, arrays and objects'},
      { title: 'Functions', description: 'Learning how to use function declarations, function expressions and arrow functions'},
			{ title: 'Conditionals', description: 'Usings if-else, switch and the ternary operator'},
			{ title: 'Loops', description: 'Iterating over sequences by repetition or by traversing an iterable' },
			{ title: 'Map', description: 'Processing/Mutating each element of an array according to a certain pattern' },
			{ title: 'Filter', description: 'Removing elements of an array according to a certain pattern'},
      { title: 'Reduce', description: 'Processing/Mutating each element of an array and generating an accumulator'},
      { title: 'Try Catch', description: 'Dealing with erros and exceptions in JavaScript' },
      { title: 'Closures', description: 'Holding the environment' },
      { title: 'Generators', description: 'Producing sequential items in steps and gaining performance' },
      { title: 'Callbacks', description: 'Understanding one of the most fundamental concept from asyncronous programming in JavaScript' },
			{ title: 'Promises', description: 'Making async calls and avoiding callback hell'},
			{ title: 'Async Await', description: 'Syntatic sugar for Generator plus Promises'}
    ]
  },
  {
    title: 'TypeScript',
    icon: <CategoriesTypeScriptSvg />,
    description: 'Fundamentals for extending JavaScript',
    contents: [
			{ title: 'Types', description: 'Statically type check JavaScript code' },
			{ title: 'Interfaces', description: 'Creating a blueprint for data consisting of key-value pairs' },
      { title: 'Generics', description: 'Allowing the usage of multiple types' },
      { title: 'Decorators', description: 'Injecting extra functionality and metadata' }
    ]
  },
  {
    title: 'React',
    icon: <CategoriesJavaScriptSvg />,
    description: 'Concepts from React, focusing on function components and React Hooks',
    contents: [
      { title: 'Rendering', description: 'Rendering on the browser with JXS' },
      { title: 'Styling', description: 'Creating a fully component oriented app with JSS' },
			{ title: 'State', description: 'State management and re-rendering components' },
			{ title: 'Props', description: 'Passing data from parent component to child component' },
      { title: 'Side Effects', description: 'Dealing with side effects on the component lifecycle' },
      { title: 'Context', description: 'Creating global variables and methods' },
      { title: 'Refs', description: 'An escape hatch from react state management' },
      { title: 'Memoization', description: 'Improving performance by memoizing data and methods' },
      { title: 'Routing', description: 'Creating Single Page Apps with react-router' },
      { title: 'Plots', description: 'Creating plots in react with ???' },
      { title: 'Animation', description: 'Controlling animations with react-spring' },
      { title: 'Graphics', description: 'Usage of 3D graphics with three.js and react-three-fiber' },
      { title: 'Videos', description: 'Manipulating videos in react with ???' },
    ]
  },
  {
    title: 'Backend',
    icon: <CategoriesJavaScriptSvg />,
    description: 'Extending applications with Node.js and GraphQL',
    contents: [
      { title: 'Node.js', description: 'Executing server side JavaScript and integrating with the frontend'},
      { title: 'GraphQL', description: 'Modeling backend APIs with GraphQL and integrating with the frontend' },
      { title: 'MongoDB', description: 'Persisting unstructured data using a Non-Relational Database' },
      { title: 'Auth', description: 'Authenticating users with passport.js' }
    ]
  },
  {
    title: 'Mobile',
    icon: <CategoriesJavaScriptSvg />,
    description: 'Creating native apps for Android and IOS',
    contents: [
      { title: 'React Native', description: 'React Native crash course' },
      { title: 'Sharing Code', description: 'Sharing code between React and React Native' },
      { title: 'Push Notifications', description: 'Interate with the user even when the app is hybernating' },
      { title: 'Camera', description: 'Controlling IOS and Android cameras' }
    ],
	},
	{
    title: "Artificial Intelligence",
    icon: <CategoriesJavaScriptSvg />,
    description: 'Tackling the big trend in AI today - Deep Learning',
		contents: [
			{ title: 'Tensorflow.js', description: 'Dynamic data computation for deep learning' },
			{ title: 'Sentiment Analysis', description: 'Getting the meaning and the emotion from text sentences' },
			{ title: 'Chatbot', description: 'Using the ??? API' },
			{ title: 'Facial Recognition', description: 'Using the ??? API' }
		]
	},
];

const Categories = () => {
  return (
    <CategoriesContainer>
      {topics.map((topic, index) => 
        <CategoriesItemContainer key={index}>
            <CategoriesTitleSvgContainer>
              {topic.icon}
            </CategoriesTitleSvgContainer>
            <CategoriesItemTitleName>
              {topic.title}
            </CategoriesItemTitleName>
            <CategoriesItemTitleDescription>
              {topic.description}
            </CategoriesItemTitleDescription>
          <CategoriesItemContentsContainer>
            {topic.contents.map((content, index) => 
              <CategoriesItemContentsItem key={index}>
                <CategoriesContentsTitle>
                  {content.title}
                </CategoriesContentsTitle>
                <CategoriesContentsDescription>
                  {content.description}
                </CategoriesContentsDescription>
              </CategoriesItemContentsItem>
            )}
          </CategoriesItemContentsContainer>
        </CategoriesItemContainer>
      )}
    </CategoriesContainer>
  )
};

export default Categories;