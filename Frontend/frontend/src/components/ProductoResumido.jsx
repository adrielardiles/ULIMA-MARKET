import React from 'react';
import { useNavigate } from 'react-router-dom';
import BotonAgregar from '../components/BotonAgregar';

const ProductoResumido = ({ producto }) => {
  const navigate = useNavigate();

  const manejarClickImagen = () => {
    // Navegar a la página de detalle del producto con el estado
    navigate(`/producto/${producto.id}`, {
      state: { producto }
    });
  };

  return (
    <div className="producto-resumido card mx-auto mb-4 d-flex" style={{ width: '18rem', textAlign: 'center' }}>
      <img
        src={producto.imagen}
        className="card-img-top"
        alt={producto.nombre}
        onClick={manejarClickImagen}
        style={{
          cursor: 'pointer',
          width: '100%',
          height: '200px',
          objectFit: 'contain'
        }}
      />
      <div className="card-body align-items-center">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">S/ {producto.precio.toFixed(2)}</p>
        <BotonAgregar precio={producto.precio} />
      </div>
    </div>
  );
};

export default ProductoResumido;
