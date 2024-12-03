import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoriasMenu = ({ categorias }) => {
  const navigate = useNavigate();

  const manejarClickCategoria = (categoria) => {
    navigate(`/mostrarTodo/${categoria}`);
  };

  return <>
    <div
      style={{
        position: 'absolute',
        left: '20px',
        top: '100%',
        backgroundColor: '#f8e8cb',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '10px',
        borderRadius: '4px',
        width: '200px',
        zIndex: 1,
      }}
    >
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {categorias.map((categoria, index) => (
          <li
            key={index}
            style={{ padding: '8px 0', cursor: 'pointer' }}
            onClick={() => manejarClickCategoria(categoria)}
          >
            {categoria}
          </li>
        ))}
      </ul>
    </div>
    </>
};

export default CategoriasMenu;
