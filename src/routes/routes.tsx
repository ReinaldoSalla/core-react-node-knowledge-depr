import HomePage from '../pages/Home';
import BaseContentPage from '../pages/BaseContent';
import BaseFooterPage from '../pages/BaseFooter';

const routes = [
  {
    path: '/data-structures',
    component: BaseContentPage
  },
  {
    path: '/functions',
    component: BaseContentPage
  },
  {
    path: '/conditionals',
    component: BaseContentPage
  },
  {
    path: '/loops',
    component: BaseContentPage
  },
  {
    path: '/map',
    component: BaseContentPage
  },
  {
    path: '/filter',
    component: BaseContentPage
  },
  {
    path: '/reduce',
    component: BaseContentPage
  },
  {
    path: '/legal',
    component: BaseFooterPage
  },
  {
    path: '/philosophy',
    component: BaseFooterPage
  },
  {
    path: '/contact',
    component: BaseFooterPage
  },
  {
    path: '/',
    component: HomePage
  }
];

export default routes;