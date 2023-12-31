import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from 'src/ErrorPage.tsx';
import LoginApp from 'src/popups/LoginApp';
import UserProfile from 'src/popups/UserProfile';
import 'src/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <></>, // TODO
    errorElement: <ErrorPage />,
    loader: () => {
      throw new Error('Not supported');
    },
  },
  { path: '/login', element: <LoginApp /> },
  { path: '/profile', element: <UserProfile /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
