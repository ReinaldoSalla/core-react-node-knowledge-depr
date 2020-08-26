import React from 'react';
import Courosel from '../../components/Courosel';
import Categories from '../../components/Categories';
import Video from '../../components/Video';
import {Route} from 'react-router-dom';

const HomePage = () => (
  <Route path='/' exact>
    <Video />
    <Courosel />
    <Categories />
  </Route>
);

export default HomePage;
