import HomePage from '../../pages/HomePage';
import BaseContentPage from '../../pages/BaseContentPage';
import BaseFooterPage from '../../pages/BaseFooterPage';

const routesConfig = [
	{
		path: '/data-structures',
		component: BaseContentPage,
	},
	{
		path: '/functions',
		component: BaseContentPage,
	},
	{
		path: '/conditionals',
		component: BaseContentPage,
	},
	{
		path: '/loops',
		component: BaseContentPage,
	},
	{
		path: '/map',
		component: BaseContentPage,
	},
	{
		path: '/filter',
		component: BaseContentPage,
	},
	{
		path: '/reduce',
		component: BaseContentPage,
  },
  {
    path: '/rendering',
    component: BaseContentPage
  },
	{
		path: '/rendering',
		component: BaseContentPage,
	},
	{
		path: '/legal',
		component: BaseFooterPage,
	},
	{
		path: '/philosophy',
		component: BaseFooterPage,
	},
	{
		path: '/contact',
		component: BaseFooterPage,
	},
	{
		path: '/',
		component: HomePage,
	},
];

export default routesConfig;
