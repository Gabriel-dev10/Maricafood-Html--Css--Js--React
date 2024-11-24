import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './routes/app'
import Pedido from './routes/pedido'
import User from './routes/user';
import Login from './routes/login';
import Cadastro  from './routes/cadastro';
import Carrinho from './routes/carrinho';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path:'pedido',
    element: <Pedido />
  },
  {
    path: 'user',
    element: <User />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'cadastro',
    element: <Cadastro />
  },
  {
    path: 'carrinho',
    element: <Carrinho />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

