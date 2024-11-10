// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { AuthProvider } from './context/AuthContext';
import { CarritoProvider } from './context/CarritoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <CarritoProvider>
        <RouterProvider router={router} />
      </CarritoProvider>
    </AuthProvider>
  </React.StrictMode>
);
