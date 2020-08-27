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

const HomePageReducer = (state, {type, payload} ) => {
  switch(type) {
    case SCROLL_TO_JAVASCRIPT:
      return scrollToJavaScript(state, payload);
    case SET_JAVASCRIPT_OFFSET_TOP:
      return setJavaScriptOffsetTop(state, payload);
    default:
      throw new Error(
        `Action type ${type} not defined in HomePageReducer`
      );
  }
};

export default HomePageReducer;