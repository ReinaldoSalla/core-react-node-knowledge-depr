import React, { 
  Fragment,
	FunctionComponent,
	useState
 } from 'react';
import { 
  SidebarTextContainer,
  SidebarTitleContainer,
  AnimatedSidebarContainer,
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

const useSidebarHeight = ( 
	sidebarOffset: number, 
	sidebarScrollbarOffset: number
): Array<string> => {
	const height = useHeight();
	const topbarHeight = 70;
	return [
		`${height - topbarHeight - sidebarOffset}px`,
		`${height - topbarHeight - sidebarScrollbarOffset}px`
	];
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
	const [isHovering, setIsHovering] = useState(false);
	const [sidebarHeight, sidebarScrollbarHeight] = useSidebarHeight(110, 30);
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

	const handleMouseEnter = () => setIsHovering(true);

	const handleMouseLeave = () => setIsHovering(false);

	const renderThumbVertical = ({ style }) => (
		<div style={{ 
			...style, 
			backgroundColor: '#dfcece', 
			opacity: isHovering ? 1 : 0,
			borderRadius: '20px'
		}}	/>
	);

  return (
		<AnimatedSidebarContainer height={sidebarHeight} style={sidebarAnimation}> 
			<Scrollbars 
				style={{ height: sidebarScrollbarHeight, width: '217px' }} 
				renderThumbVertical={renderThumbVertical}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			> 
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
		</Scrollbars>
	</AnimatedSidebarContainer>
  );
};

export default Sidebar;

