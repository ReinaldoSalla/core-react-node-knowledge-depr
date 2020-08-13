import React from 'react';
import HomePage from '../pages/HomePage';
import TestPage from '../pages/TestPage';

const routes = [
  {
    path: '/javascript/data-structures',
    component: TestPage
  },
  {
    path: '/javascript/functions',
    component: TestPage
  },
  {
    path: '/javascript/conditionals',
    component: TestPage
  },
  {
    path: '/javascript/loops',
    component: TestPage
  },
  {
    path: '/',
    component: HomePage
  }
]

export default routes;