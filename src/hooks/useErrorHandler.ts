import { useState } from 'react';

const useErrorHandler = () => {
  const [errorMessage, setErrorMessage] = useState('');

  return {
    invalid: errorMessage !== '',
    message: errorMessage,
    set: setErrorMessage,
    reset: () => setErrorMessage(''),
  };
};

export default useErrorHandler;
