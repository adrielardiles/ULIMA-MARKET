import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { AuthProvider } from './context/AuthContext'; // Asegúrate de que la ruta sea correcta
import ScrollResetear from './components/scrollResetear'; // Importa el componente ScrollToTop

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <ScrollResetear /> {/* Coloca el ScrollToTop aquí dentro */}
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
