import CONSTANTS from './HomePage.constants';

const scrollToJavaScript = (state) => {
  console.log(state.javascriptOffsetTop);
  window.scroll({ top: state.javascriptOffsetTop, behavior: 'smooth' });
  return { ...state };
};

const setJavaScriptOffsetTop = (state, payload) => {
  return {
    ...state,
    javascriptOffsetTop: payload.offsetTop - CONSTANTS.GENERAL_OFFSET
  };
};

export {
  scrollToJavaScript,
  setJavaScriptOffsetTop
};

