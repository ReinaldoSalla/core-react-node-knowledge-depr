import React, { 
  FunctionComponent
 } from 'react';
import { 
  SidebarContainer,
  SidebarTitle,
  SidebarContent
} from './Sidebar.styles';
import SidebarProps from './Sidebar.interfaces';
import { useSpring } from 'react-spring';

const sidebarContents = {
  react: {
    title: 'React',
    contents: [
      'Rendering',
      'Styling',
      'State and Props',
      'Side Effects',
      'Refs',
      'Memoization',
      'Routing',
      'Plots',
      'Animation',
      'Graphics',
      'Videos',
    ]
  },
  javascript: {
    title: 'Vanilla JavaScript',
    contents: [
      'Data Structures',
      'Functions',
      'Conditionals and Loops',
      'Map Filter Reduce',
      'Closures',
      'Asyncronous Programming'
    ]
  },
  typescript: {
    title: 'Vanilla TypeScript',
    contents: [
      'Interfaces',
      'Generics',
      'Decorators'
    ]
  },
  backend: {
    title: 'Backend',
    contents: [
      'Node',
      'GraphQL',
      'MongoDB',
      'Auth'
    ]
  },
  mobile: {
    title: 'Mobile',
    contents: [
      'React Native Crash Course',
      'Push Notifications',
      'Camera'
    ],
  },
  projects: {
    title: 'Full Fledged Projects',
    contents: [
      'Ecommerce',
      'News',
      'Social Media'
    ],
  }
};

const Sidebar: FunctionComponent<SidebarProps> = ({
  isSidebarVisible
}) => {
  const sidebarAnimation = useSpring({
    marginLeft: isSidebarVisible ? '0px' : '-135px'
  });
  return (
    <SidebarContainer style={sidebarAnimation}>
      <SidebarTitle>{sidebarContents.javascript.title}</SidebarTitle>
      {sidebarContents.javascript.contents.map((item, index) =>
        <SidebarContent key={index}>{item}</SidebarContent>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;