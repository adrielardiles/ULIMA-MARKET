import React, { useState } from 'react';
import { useCarrito } from '../context/CarritoContext';

const BotonAgregar = ({ producto }) => {
  const { agregarProducto } = useCarrito(); // Obtener la función para agregar producto al carrito
  const [mostrarCantidad, setMostrarCantidad] = useState(false);
  const [cantidad, setCantidad] = useState(1);

  const manejarClickAgregar = () => {
    setMostrarCantidad(true);
  };

  const manejarCambioCantidad = (operacion) => {
    setCantidad((prevCantidad) => {
      let nuevaCantidad = prevCantidad;
      if (operacion === 'incrementar') nuevaCantidad = prevCantidad + 1;
      if (operacion === 'decrementar') {
        if (prevCantidad === 1) {
          setMostrarCantidad(false);
          return 1;
        }
        nuevaCantidad = prevCantidad - 1;
      }
      return nuevaCantidad;
    });
  };

  const confirmarAgregarProducto = () => {
    // Agregar el producto al carrito con la cantidad actual
    agregarProducto({ ...producto, cantidad });
    // Opcionalmente, puedes ocultar la sección de cantidad
    setMostrarCantidad(false);
  };

  return <>
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
            style={{ padding: '0 10px', border: '1px solid #ccc', marginRight: '10px' }}
          >
            -
          </button>
          <span style={{ padding: '0 10px' }}>{cantidad}</span>
          <button
            className="btn btn-success"
            onClick={() => manejarCambioCantidad('incrementar')}
            style={{ padding: '0 10px', border: '1px solid #ccc', color: 'white', marginLeft: '10px' }}
          >
            +
          </button>
          <button
            className="btn btn-primary"
            onClick={confirmarAgregarProducto} // Llamar a la función confirmación
            style={{ marginLeft: '10px' }}
          >
            Confirmar
          </button>
        </div>
      )}
    </div>
  </>
};

export default BotonAgregar;
