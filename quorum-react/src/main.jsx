import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';


import App from './App.jsx';
import Layout from './Layout.jsx';
import MainPage from './MainPage.jsx';
import CuriosidadesPage from './CuriosidadesPage.jsx';

// Creamos las rutas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/main",
        element: <MainPage />,
      },
      {
        path: "/curiosidades",
        element: <CuriosidadesPage />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
