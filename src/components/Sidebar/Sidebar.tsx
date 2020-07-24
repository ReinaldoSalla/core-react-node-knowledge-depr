import React, { 
  Fragment,
  FunctionComponent
 } from 'react';
import { 
  SidebarTextContainer,
  SidebarTitleContainer,
  AnimatedSidebarContainer,
  SidebarScrollbar
} from './Sidebar.styles';
import { 
  SidebarItemsProps,
  SidebarItemProps,
  SidebarContent,
  SidebarProps
} from './Sidebar.interfaces';
import { useSpring, useTrail, animated, config } from 'react-spring';
import { Scrollbars } from 'react-custom-scrollbars';
import useHeight from '../../utils/useHeight';
import { inspect } from '../.././utils/inspect';

const sidebarContent: SidebarContent = {
  javascript: {
    title: 'JavaScript',
    items: [
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
  typescript: {
    title: 'TypeScript',
    items: [
			'Types',
			'Interfaces',
      'Generics',
      'Decorators'
    ]
  },
  react: {
    title: 'React',
    items: [
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
  backend: {
    title: 'Backend',
    items: [
      'Node',
      'GraphQL',
      'MongoDB',
      'Auth'
    ]
  },
  mobile: {
    title: 'Mobile',
    items: [
      'React Native',
      'Sharing Code',
      'Notifications',
      'Camera'
    ],
	},
	ai: {
		title: "Artificial Intelligence",
		items: [
			'Tensorflow',
			'Sentiment Analysis',
			'Chatbot',
			'Facial Recognition'
		]
	},
  projects: {
    title: 'Full Fledged Projects',
    items: [
      'Portfolio',
      'Ecommerce',
      'News',
      'Social Media',
      'Getting Hired'
    ],
  }
};

const useSidebarHeight = (): string => {
  const height = useHeight();
  const topbarHeight = 70;
  const offset = 110;
  return `${height - topbarHeight - offset}px`;
};

const SidebarItem: FunctionComponent<SidebarItemProps> = ({ 
  item 
}): JSX.Element => (
  <SidebarTextContainer>{item}</SidebarTextContainer>
);

const SidebarItems: FunctionComponent<SidebarItemsProps> = ({ 
  title, 
	items,
	firstTitle
}): JSX.Element => (
  <Fragment>
		{firstTitle 
			? <SidebarTitleContainer firstTitle>{title}</SidebarTitleContainer>
			: <SidebarTitleContainer>{title}</SidebarTitleContainer>
		}
    {items.map((item, index) => 
      <SidebarItem key={index} item={item} />
    )}
  </Fragment>
);

const Sidebar: FunctionComponent<SidebarProps> = ({
  isSidebarVisible
}) => {
  const sidebarAnimation = useSpring({
    from: { 
      transform: 'translateX(100px)',
      opacity: 0
    },
    to: async (next) => {
      await next({ 
        transform: isSidebarVisible ? 'translateX(0%)' : 'translateX(-220%)',
        opacity: isSidebarVisible ? 1 : 0 
      })
    }
  });
  return (
    <AnimatedSidebarContainer height={useSidebarHeight()} style={sidebarAnimation}>
      {/* <Scrollbars style={{ height: 700, width: 250, color: 'blue' }}> */}
        {/* <SidebarScrollbar> */}
        {/* {height} */}
        <SidebarItems
          firstTitle={true}
          title={sidebarContent.javascript.title}
          items={sidebarContent.javascript.items}
        />
        <SidebarItems
          title={sidebarContent.typescript.title}
          items={sidebarContent.typescript.items}
        />
        <SidebarItems
          title={sidebarContent.react.title}
          items={sidebarContent.react.items}
        />
        <SidebarItems 
          title={sidebarContent.backend.title} 
          items={sidebarContent.backend.items}
        />
        <SidebarItems
          title={sidebarContent.mobile.title}
          items={sidebarContent.mobile.items}
        />
        <SidebarItems
          title={sidebarContent.ai.title}
          items={sidebarContent.ai.items}
        />
        <SidebarItems
          title={sidebarContent.projects.title}
          items={sidebarContent.projects.items}
        />
        <br /> 
        {/* </SidebarScrollbar> */}
    {/* </Scrollbars> */}
    </AnimatedSidebarContainer>
  );
};

export default Sidebar;