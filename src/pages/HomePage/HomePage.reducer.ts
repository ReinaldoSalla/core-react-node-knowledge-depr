import {
  SCROLL_TO_JAVASCRIPT,
  SCROLL_TO_TYPESCRIPT,
  SCROLL_TO_REACT,
  SCROLL_TO_GRAPHQL,
  SET_JAVASCRIPT_OFFSET_TOP,
  SET_TYPESCRIPT_OFFSET_TOP,
  SET_REACT_OFFSET_TOP,
  SET_GRAPHQL_OFFSET_TOP
} from './HomePage.constants';
import {
  scrollToJavaScript,
  setJavaScriptOffsetTop
} from './HomePage.actions';

const HomePageReducer = (state, action) => {
  switch(action.type) {
    case SCROLL_TO_JAVASCRIPT:
      console.log('click');
      return scrollToJavaScript(state, action.payload);
    case SET_JAVASCRIPT_OFFSET_TOP:
      return setJavaScriptOffsetTop(state, action.payload);
    default:
      throw new Error(
        `Action type ${action.type} not defined in HomePageReducer`
      );
  }
};

export default HomePageReducer;