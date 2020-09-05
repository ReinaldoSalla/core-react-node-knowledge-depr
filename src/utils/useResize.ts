import { useEffect, useState, useCallback } from 'react';
import throttle from 'lodash.throttle';

interface UseResize {
  width: number;
  height: number;
}

const useResize = (): UseResize => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  const handleResize = throttle(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }, 250);

  useEffect(() => {
		window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
	});
	return { width, height };
};

export default useResize;