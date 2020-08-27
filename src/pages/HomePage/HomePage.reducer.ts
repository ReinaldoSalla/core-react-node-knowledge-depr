import CONSTANTS from './HomePage.constants';
import {
  scrollToJavaScript,
  setJavaScriptOffsetTop
} from './HomePage.actions';

const homePageReducer = (state, action) => {
  switch(action.type) {
    case CONSTANTS.SCROLL_TO_JAVASCRIPT:
      return scrollToJavaScript(state);
    case CONSTANTS.SET_JAVASCRIPT_OFFSET_TOP:
      return setJavaScriptOffsetTop(state, action.payload);
    default:
      throw new Error(
        `Action type ${action.type} not defined in homePageReducer`
      );
  }
};

export default homePageReducer;