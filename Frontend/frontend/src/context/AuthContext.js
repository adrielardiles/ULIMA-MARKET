// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null); // Estado global de usuario

  const iniciarSesion = (userData) => {
    setUsuario(userData); // Establece el usuario cuando se loguea
  };

  const cerrarSesion = () => {
    setUsuario(null); // Limpia el usuario cuando se cierra sesión
  };

  const value = {
    usuario,
    iniciarSesion,
    cerrarSesion,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
