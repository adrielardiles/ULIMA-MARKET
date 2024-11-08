import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductoResumido = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);
  const [mostrarCantidad, setMostrarCantidad] = useState(false);
  const navigate = useNavigate();

  const agregarAlCarrito = () => {
    setMostrarCantidad(true);
  };

  const manejarCambioCantidad = (e) => {
    setCantidad(e.target.value);
  };

  const imagenRuta = `${process.env.PUBLIC_URL}/imagenes/productos/${producto.imagen}`;

  return (
    <div className="producto-resumido card mx-auto mb-4" style={{ width: '18rem' }}>
      <img
        src={imagenRuta}
        className="card-img-top"
        alt={producto.nombre}
        onClick={() => navigate(`/producto/${producto.id}`)}
        style={{
          cursor: 'pointer',
          width: '100%',
          height: '200px',
          objectFit: 'contain'
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">S/ {producto.precio.toFixed(2)}</p>
        <button className="btn btn-success" onClick={agregarAlCarrito}>
          Agregar
        </button>

        {mostrarCantidad && (
          <div className="cantidad-seleccion mt-3">
            <input
              type="number"
              value={cantidad}
              min="1"
              onChange={manejarCambioCantidad}
              className="form-control w-50 d-inline"
            />
            <p>Total: S/ {(producto.precio * cantidad).toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductoResumido;
