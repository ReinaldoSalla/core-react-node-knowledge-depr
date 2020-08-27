const scrollToJavaScript = (state, payload) => {
  console.log(`click ${'*'.repeat(100)}`);
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

