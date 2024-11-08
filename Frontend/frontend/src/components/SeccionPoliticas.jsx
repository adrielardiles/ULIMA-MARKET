import React from 'react';

const SeccionPoliticas = ({ politicas, navigate }) => {
  return (
    <div className="politicas-uso">
      <h6 style={{ color: '#CE4500' }}>POLÍTICAS DE USO</h6>
      {politicas.map((politica, index) => (
        <p
          key={index}
          className="text-dark"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate(politica.ruta)}
        >
          {politica.texto}
        </p>
      ))}
    </div>
  );
};

export default SeccionPoliticas;
