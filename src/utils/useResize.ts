import { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';

interface UseResize {
	width: number;
	height: number;
}

const useResize = (): UseResize => {
	// const [width, setWidth] = useState<number>(window.innerWidth);
	const [height, setHeight] = useState<number>(window.innerHeight);

	useEffect(() => {
		const handleResize = throttle(() => {
			setHeight(window.innerHeight);
			// setWidth(window.innerWidth);
		}, 100);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [height]);
  return { width: 1000, height };
};

export default useResize;
