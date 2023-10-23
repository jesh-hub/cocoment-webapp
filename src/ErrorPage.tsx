import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  const errorMessage = isRouteErrorResponse(error)
    ? error.statusText
    : error instanceof Error
    ? error.message
    : 'Error';

  return (
    <div id="error-page" className="my-8 text-center text-gray-900">
      <h1 className="text-7xl">Oops!</h1>
      <p className="mt-8">Sorry, an unexpected error has occurred.</p>
      <p className="font-serif mt-2 italic">{errorMessage}</p>
    </div>
  );
}
