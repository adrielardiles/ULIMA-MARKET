import React from 'react';

const CategoriasMenu = ({ categorias }) => {
  return (
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
      <ul className="list-unstyled mb-0">
        {categorias.map((categoria, index) => (
          <li key={index} style={{ padding: '8px 0', cursor: 'pointer' }}>
            {categoria}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriasMenu;
