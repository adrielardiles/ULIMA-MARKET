import React from 'react';

const SeccionAtencionCliente = ({ opciones, navigate }) => {
  return <>
    <div className="atencion-cliente">
      <h6 style={{ color: '#CE4500' }}>ATENCIÓN AL CLIENTE</h6>
      {opciones.map((opcion, index) => (
        <p
          key={index}
          className="text-dark"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate(opcion.ruta)}
        >
          {opcion.texto}
        </p>
      ))}
    </div>
  </>
};

export default SeccionAtencionCliente;
