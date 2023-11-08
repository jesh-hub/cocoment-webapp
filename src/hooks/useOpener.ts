import { useEffect } from 'react';

const useOpener = <T>(onReceiveMessage?: (data: T) => void) => {
  const postMessage = <V>(data: V) => {
    if (window.opener !== null)
      // 중요한 정보를 주고받지 말자. 정확한 uri를 target origin으로 설정할 수 없는 상황이다.
      window.opener.postMessage(data, '*');
  };

  const close = () => {
    window.close();
  };

  useEffect(() => {
    if (onReceiveMessage === undefined) return;

    const handleReceiveMessage = ({
      // origin,
      data,
      source,
    }: MessageEvent<T>) => {
      // console.log(origin);
      if (source !== window.opener) return;

      // console.log('onReceiveMessage', data);
      onReceiveMessage(data);
    };

    addEventListener('message', handleReceiveMessage);
    return () => {
      removeEventListener('message', handleReceiveMessage);
    };
  }, []);

  return {
    close,
    postMessage,
  };
};

export default useOpener;
