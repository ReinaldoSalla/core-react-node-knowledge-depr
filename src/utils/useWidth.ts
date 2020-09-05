import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';
import debouce from 'lodash.debounce';

const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = debouce(
      () => {
        setWidth(window.innerWidth)
      }, 1000);
    window.addEventListener('resize', handleResize);
    return () => window.addEventListener('resize', handleResize);
  }, []);
  return width;
};

export default useWidth;                                               