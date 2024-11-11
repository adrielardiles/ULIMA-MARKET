import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductoResumido = ({ producto }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const manejarClick = async () => {
    try {
      // Realizar el fetch para obtener los productos relacionados por categoría
      const respuesta = await fetch(`http://localhost:3000/productos/categoria/1`);
      if (!respuesta.ok) {
        throw new Error('Error al obtener productos relacionados');
      }
      const data = await respuesta.json();
      // Filtramos el producto actual para que no se incluya en los productos relacionados
      const productosFiltrados = data.filter(p => p.id !== producto.id);

      // Redirigir a la página del producto con los datos relacionados como props
      navigate(`/productoPage`, {
        state: {
          productoSeleccionado: producto,
          productosRelacionados: productosFiltrados,
        }
      });

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="producto-resumido card mx-auto mb-4 d-flex" style={{ width: '18rem', textAlign: 'center' }}>
      <img
        src={producto.imagen}
        className="card-img-top"
        alt={producto.nombre}
        style={{
          cursor: 'pointer',
          width: '100%',
          height: '200px',
          objectFit: 'contain'
        }}
        onClick={manejarClick}
      />
      <div className="card-body align-items-center">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">S/ {producto.precio.toFixed(2)}</p>
      </div>
      {error && <p>Error al cargar productos: {error}</p>}
    </div>
  );
};

export default ProductoResumido;
