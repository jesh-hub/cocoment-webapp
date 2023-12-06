import { useEffect, useRef, useState } from 'react';

const useResizeHandler = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  const resizeTimeoutId = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleResize = () => {
      if (resizeTimeoutId.current !== undefined)
        clearTimeout(resizeTimeoutId.current);
      resizeTimeoutId.current = setTimeout(() => {
        setSize([window.innerWidth, window.innerHeight]);
        resizeTimeoutId.current = undefined;
      }, 300);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutId.current !== undefined) {
        clearTimeout(resizeTimeoutId.current);
        resizeTimeoutId.current = undefined;
      }
    };
  }, []);

  return size;
};

export default useResizeHandler;
