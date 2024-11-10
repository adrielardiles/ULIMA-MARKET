
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null); 

  const iniciarSesion = (userData) => {
    setUsuario(userData); 
  };

  const cerrarSesion = () => {
    setUsuario(null); 
  };

  const value = {
    usuario,
    iniciarSesion,
    cerrarSesion,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
