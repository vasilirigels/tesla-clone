import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ModelSPage from "./pages/ModelSPage";
import ModelXPage from "./pages/ModelXPage";
import CybertruckPage from "./pages/CybertruckPage";
import ShopPage from "./pages/ShopPage";
import CartPage from './pages/CartPage'
import { RecoilRoot } from 'recoil';
import {Toaster} from "react-hot-toast";
import ModelYPage from "./pages/ModelYPage";
import Model3Page from "./pages/Model3Page";
export const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <App>
          <HomePage />
        </App>
    ),
  },
  {
    path: '/model_s',
    element: (
        <App>
          <ModelSPage />
        </App>
    ),
  },
  {
    path: '/model_x',
    element: (
        <App>
          <ModelXPage />
        </App>
    ),
  },
  {
    path: '/cybertruck',
    element: (
        <App>
          <CybertruckPage />
        </App>
    ),
  },
    {
        path: '/model_y',
        element: (
            <App>
                <ModelYPage />
            </App>
        ),
    },
    {
        path: '/model_3',
        element: (
            <App>
                <Model3Page />
            </App>
        ),
    },
    {
        path: '/shop',
        element: (
            <App>
                <ShopPage />
            </App>
        ),
    },
    {
        path: '/cart',
        element: (
            <App>
                <CartPage />
            </App>
        ),
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Toaster />
      <RecoilRoot>
    <RouterProvider router={router} />
      </RecoilRoot>
  </React.StrictMode>,
);

