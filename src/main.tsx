import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Landing, loader as landingLoader } from './pages/Landing/Landing';
import { ErrorPage } from './pages/Error/ErrorPage';
import { PersonDetail, loader as personLoader } from './pages/PersonDetail/PersonDetail';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    loader: landingLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "/people/:personId",
    element: <PersonDetail />,
    loader: personLoader,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
