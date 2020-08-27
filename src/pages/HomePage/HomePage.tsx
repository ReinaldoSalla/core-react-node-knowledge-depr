import React, { useReducer, useCallback } from 'react';
import Courosel from '../../components/Courosel';
import Categories from '../../components/Categories';
import Video from '../../components/Video';
import { Route } from 'react-router-dom';
import HomePageReducer from './HomePage.reducer';
import {
  SCROLL_TO_JAVASCRIPT,
  SCROLL_TO_TYPESCRIPT,
  SCROLL_TO_REACT,
  SCROLL_TO_GRAPHQL,
  SET_JAVASCRIPT_OFFSET_TOP,
  SET_TYPESCRIPT_OFFSET_TOP,
  SET_REACT_OFFSET_TOP,
  SET_GRAPHQL_OFFSET_TOP,
  TOPBAR_HEIGHT
} from './HomePage.constants';

const HomePage = () => {
  const [state, dispatch] = useReducer(HomePageReducer, {
    javascriptOffsetTop: 0,
    typescriptOffsetTop: 0,
    reactOffsetTop: 0,
    graphqlOffsetTop: 0
  });
  
  const handleJavaScriptClick = () => {
    dispatch({ 
      type: SCROLL_TO_JAVASCRIPT,
      payload: state.javascriptOffsetTop
    });
  };

  const javascriptRef = useCallback(node => {
    if (node) 
      dispatch({ 
        type: SET_JAVASCRIPT_OFFSET_TOP, 
        payload: node.offsetTop + TOPBAR_HEIGHT
      })
  }, []);


  return (
    <Route path='/' exact>
      <Video />
      <Courosel 
        handleJavaScriptClick={handleJavaScriptClick}
      />
      <Categories />
    </Route>
  )
};

export default HomePage;
