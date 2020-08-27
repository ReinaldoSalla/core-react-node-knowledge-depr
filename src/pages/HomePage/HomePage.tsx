import React, { useReducer, useCallback } from 'react';
import Courosel from '../../components/Courosel';
import Categories from '../../components/Categories';
import Video from '../../components/Video';
import { Route } from 'react-router-dom';
import homePageReducer from './HomePage.reducer';
import { ACTIONS } from './HomePage.constants';

const HomePage = () => {
  const [_, dispatch] = useReducer(homePageReducer, {
    javascriptOffsetTop: 0,
    typescriptOffsetTop: 0,
    reactOffsetTop: 0,
    graphqlOffsetTop: 0
  });
  
  const handleClick = (event) => {
    console.log(event.target.getAttribute('name'));
    dispatch({ 
      type: ACTIONS.SCROLL_TO_REFERENCE,
      payload: event
    });
  };

  const javascriptRef = useCallback(node => {
    dispatch({ 
      type: ACTIONS.SET_JAVASCRIPT_OFFSET_TOP, 
      payload: node
    });
  }, []);

  const typescriptRef = useCallback(node => {
    dispatch({
      type: ACTIONS.SET_TYPESCRIPT_OFFSET_TOP,
      payload: node
    })
  }, []);


  return (
    <Route path='/' exact>
      <Video />
      <Courosel handleClick={handleClick}/>
      <Categories javascriptRef={javascriptRef}/>
    </Route>
  )
};

export default HomePage;
