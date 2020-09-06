import { useEffect, useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

interface UseResize {
  width: number;
  height: number;
}

const useResize = (): UseResize => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  const handleResize = debounce(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }, 100);

  useEffect(() => {
		window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
	}, []);
  return { width, height };
};

export default useResize;