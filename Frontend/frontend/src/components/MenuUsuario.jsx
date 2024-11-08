import React from 'react';
import { useNavigate } from 'react-router-dom';

const MenuUsuario = ({ usuario }) => {
  const navigate = useNavigate();

  const manejarClick = () => {
    if (usuario) {
      navigate('/perfil'); // Si el usuario está logueado, ir al perfil
    } else {
      navigate('/login'); // Si no está logueado, ir a la página de login
    }
  };

  return (
    <div
      className="mx-3"
      style={{ cursor: 'pointer' }}
      onClick={manejarClick}
    >
      <span role="img" aria-label="Username">👤</span> {usuario ? usuario.nombre : 'Iniciar Sesión'}
    </div>
  );
};

export default MenuUsuario;
