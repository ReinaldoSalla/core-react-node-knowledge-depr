import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

const useHeight = (): number => {
  const [size, setSize] = useState<number>(window.innerHeight);
  
	useEffect(() => {
		window.addEventListener('resize', () => setSize(window.innerHeight));
		return () =>
			window.removeEventListener('resize', () => setSize(window.innerHeight));
	});
	return size;
};

export default useHeight;
