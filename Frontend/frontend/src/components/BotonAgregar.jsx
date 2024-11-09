import React, { useState } from 'react';

const BotonAgregar = ({ precio }) => {
  const [mostrarCantidad, setMostrarCantidad] = useState(false);
  const [cantidad, setCantidad] = useState(1);

  const manejarClickAgregar = () => {
    setMostrarCantidad(true);
  };

  const manejarCambioCantidad = (operacion) => {
    setCantidad((prevCantidad) => {
      if (operacion === 'incrementar') return prevCantidad + 1;
      if (operacion === 'decrementar') {
        if (prevCantidad === 1) {
          setMostrarCantidad(false); // Oculta el componente si la cantidad es 1 y se presiona el botón de decrementar
          return 1; // Mantiene la cantidad en 1 para evitar valores negativos
        }
        return prevCantidad - 1;
      }
      return prevCantidad;
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      {!mostrarCantidad ? (
        <button className="btn btn-success" onClick={manejarClickAgregar}>
          Agregar
        </button>
      ) : (
        <div className="d-flex align-items-center justify-content-center border rounded p-2" style={{ width: '100%' }}>
          <button
            className="btn btn-light"
            onClick={() => manejarCambioCantidad('decrementar')}
            style={{ padding: '0 10px', border: '1px solid #ccc', marginRight: '10px' }} // Espaciado derecho
          >
            -
          </button>
          <span style={{ padding: '0 10px' }}>{cantidad}</span>
          <button
            className="btn btn-success"
            onClick={() => manejarCambioCantidad('incrementar')}
            style={{ padding: '0 10px', border: '1px solid #ccc', color: 'white', marginLeft: '10px' }} // Espaciado izquierdo
          >
            +
          </button>
          <span className="ml-3" style={{ marginLeft: '15px' }}>S/ {(precio * cantidad).toFixed(2)}</span> {/* Espaciado adicional */}
        </div>
      )}
    </div>
  );
};

export default BotonAgregar;
