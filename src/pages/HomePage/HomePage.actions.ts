import CONSTANTS from './HomePage.constants';

const scrollToReference = (state, payload) => {
  switch (payload.target.getAttribute('name')) {
    case 'javascript':
      window.scroll({ top: state.javascriptOffsetTop, behavior: 'smooth' });
      break;
    default:
      window.scroll({ top: 0, behavior: 'smooth' });
  }
  return { ...state };
};

const setJavaScriptOffsetTop = (state, payload) => {
  return {
    ...state,
    javascriptOffsetTop: payload.offsetTop - CONSTANTS.GENERAL_OFFSET
  };
};

export {
  scrollToReference,
  setJavaScriptOffsetTop
};

