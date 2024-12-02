import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);

    const iniciarSesion = (userData) => {
        setUsuario(userData);
    };

    const cerrarSesion = () => {
        setUsuario(null);
    };

    return (
        <AuthContext.Provider value={{ usuario, iniciarSesion, cerrarSesion }}>
            {children}
        </AuthContext.Provider>
    );
};
