import React, { useReducer, useCallback } from 'react';
import Courosel from '../../components/Courosel';
import Categories from '../../components/Categories';
import Video from '../../components/Video';
import { Route } from 'react-router-dom';
import homePageReducer from './HomePage.reducer';
import CONSTANTS from './HomePage.constants';

const HomePage = () => {
  const [state, dispatch] = useReducer(homePageReducer, {
    javascriptOffsetTop: 0,
    typescriptOffsetTop: 0,
    reactOffsetTop: 0,
    graphqlOffsetTop: 0
  });
  
  const handleJavaScriptClick = ( e) => {
    console.log(e.target.getAttribute('name'));
    dispatch({ 
      type: CONSTANTS.SCROLL_TO_JAVASCRIPT
    });
  };

  const javascriptRef = useCallback(node => {
    if (node) 
      dispatch({ 
        type: CONSTANTS.SET_JAVASCRIPT_OFFSET_TOP, 
        payload: node.offsetTop - CONSTANTS.GENERAL_OFFSET
      })
  }, []);


  return (
    <Route path='/' exact>
      <Video />
      <Courosel 
        handleJavaScriptClick={handleJavaScriptClick}
      />
      <Categories javascriptRef={javascriptRef}/>
    </Route>
  )
};

export default HomePage;
