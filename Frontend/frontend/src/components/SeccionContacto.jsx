import React from 'react';

const SeccionContacto = ({ datos }) => {
  return <>
    <div className="contacto">
      <h6 style={{ color: '#CE4500' }}>CONTÁCTANOS</h6>
      <p>
        <a href={`tel:${datos.telefono}`} className="text-dark">
          {datos.telefono}
        </a>
      </p>
      <p>
        <a href={`mailto:${datos.correo}`} className="text-dark">
          {datos.correo}
        </a>
      </p>
    </div>
  </>
};

export default SeccionContacto;
