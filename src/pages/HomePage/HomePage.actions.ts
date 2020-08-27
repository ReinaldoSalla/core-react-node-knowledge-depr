const scrollToJavaScript = (state, payload) => {
  window.scroll({ top: payload, behavior: 'smooth' });
  return { ...state };
};

const setJavaScriptOffsetTop = (state, payload) => {
  return {
    ...state,
    javascriptOffsetTop: payload
  };
};

export {
  scrollToJavaScript,
  setJavaScriptOffsetTop
};

