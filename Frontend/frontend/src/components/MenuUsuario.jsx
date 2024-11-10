import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Importa el contexto de autenticación

const MenuUsuario = ({ usuario }) => {
    const { cerrarSesion } = useAuth(); // Usa `cerrarSesion` del contexto
    const [mostrarMenu, setMostrarMenu] = useState(false);

    const manejarToggleMenu = () => {
        setMostrarMenu(!mostrarMenu); // Alterna la visibilidad del menú
    };

    const manejarCerrarSesion = () => {
        cerrarSesion(); // Cierra la sesión
        setMostrarMenu(false); // Oculta el menú
    };

    return (
        <div style={{ position: 'relative' }}>
            {usuario ? (
                <div onClick={manejarToggleMenu} style={{ cursor: 'pointer' }}>
                    {usuario.nombre}
                </div>
            ) : (
                <div onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>
                    Iniciar Sesión
                </div>
            )}
            {mostrarMenu && usuario && (
                <div
                    style={{
                        position: 'absolute',
                        top: '100%',
                        right: 0,
                        background: '#fff',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        zIndex: 1000,
                    }}
                >
                    <button
                        onClick={manejarCerrarSesion}
                        style={{
                            background: 'none',
                            border: 'none',
                            padding: '10px 20px',
                            cursor: 'pointer',
                            width: '100%',
                            textAlign: 'left',
                        }}
                    >
                        Cerrar Sesión
                    </button>
                </div>
            )}
        </div>
    );
};

export default MenuUsuario;
