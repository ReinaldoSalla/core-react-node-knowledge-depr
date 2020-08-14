import React from 'react';
import Courosel from '../../components/Courosel';
import Categories from '../../components/Categories';
import {Route} from 'react-router-dom';

const HomePage = () => (
  <Route path='/' exact>
    <Courosel />
    <Categories />
  </Route>
);

export default HomePage;
