import React, { 
  Fragment,
  FunctionComponent
 } from 'react';
import { 
  SidebarTextContainer,
  SidebarTitleContainer,
  SidebarContainer
} from './Sidebar.styles';
import { 
  SidebarItemsProps,
  SidebarItemProps,
  SidebarContent,
  SidebarProps
} from './Sidebar.interfaces';
import { useSpring, config } from 'react-spring';
import { Scrollbars } from 'react-custom-scrollbars';

const sidebarContent: SidebarContent = {
  react: {
    title: 'React',
    items: [
      'Rendering',
      'Styling',
			'State',
			'Props',
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
    items: [
      'Data Structures',
      'Functions',
			'Conditionals',
			'Loops',
			'Map',
			'Filter',
			'Reduce',
			'Iterators',
			'Generators',
      'Closures',
			'Promises',
			'Async Await'
    ]
  },
  typescript: {
    title: 'Vanilla TypeScript',
    items: [
			'Types',
			'Interfaces',
      'Generics',
      'Decorators'
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

const SidebarItem: FunctionComponent<SidebarItemProps> = ({ 
  item 
}): JSX.Element => (
  <SidebarTextContainer>{item}</SidebarTextContainer>
);

const SidebarItems: FunctionComponent<SidebarItemsProps> = ({ 
  title, 
  items 
}): JSX.Element => (
  <Fragment>
    <SidebarTitleContainer>{title}</SidebarTitleContainer>
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
		<SidebarContainer style={sidebarAnimation}>
			<SidebarItems
				title={sidebarContent.react.title}
				items={sidebarContent.react.items}
			/>
			<SidebarItems
				title={sidebarContent.javascript.title}
				items={sidebarContent.javascript.items}
			/>
			<SidebarItems
				title={sidebarContent.typescript.title}
				items={sidebarContent.typescript.items}
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
				title={sidebarContent.projects.title}
				items={sidebarContent.projects.items}
			/>
			<br />

    </SidebarContainer>
  );
};

export default Sidebar;