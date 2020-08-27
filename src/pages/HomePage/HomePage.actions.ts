const scrollToJavaScript = (state) => {
  console.log(state.javascriptOffsetTop);
  window.scroll({ top: state.javascriptOffsetTop, behavior: 'smooth' });
  return { ...state };
};

const setJavaScriptOffsetTop = (state, payload) => {
  console.log(payload);
  return {
    ...state,
    javascriptOffsetTop: payload
  };
};

export {
  scrollToJavaScript,
  setJavaScriptOffsetTop
};

