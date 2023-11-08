import { useEffect, useRef, useState } from 'react';

const useResizeHandler = <T>(action: () => T) => {
  const [target, setTarget] = useState<T>(action());
  const resizeTimeoutId = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleResize = () => {
      clearTimeout(resizeTimeoutId.current);
      resizeTimeoutId.current = setTimeout(() => {
        setTarget(action());
        resizeTimeoutId.current = undefined;
      }, 300);
    };

    setTarget(action());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [action]);

  return target;
};

export default useResizeHandler;
