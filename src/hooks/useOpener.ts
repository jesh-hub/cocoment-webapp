import { useEffect } from 'react';

export const postMessage = <T>(data: T) => {
  if (window.opener !== null)
    // 중요한 정보를 주고받지 말자. 정확한 uri를 target origin으로 설정할 수 없는 상황이다.
    window.opener.postMessage(data, '*');
};

export const close = () => {
  if (window.opener !== null) window.close();
};

const useOpener = <T>(onReceive: (data: T) => void) => {
  useEffect(() => {
    const handleReceiveMessage = ({
      // origin,
      data,
      source,
    }: MessageEvent<T>) => {
      // console.log(origin);
      if (source !== window.opener) return;

      // console.log('onReceive', data);
      onReceive(data); // TODO useEffectEvent
    };

    postMessage({ init: true });
    addEventListener('message', handleReceiveMessage);
    return () => {
      removeEventListener('message', handleReceiveMessage);
    };
    // 주의: onReceive 함수를 위한 disable
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useOpener;
