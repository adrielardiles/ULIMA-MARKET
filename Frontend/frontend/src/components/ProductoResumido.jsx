import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext' 

const ProductoResumido = ({ producto }) => {
  const navigate = useNavigate();
  const { agregarProducto } = useCarrito(); 
  const [error, setError] = useState(null);
  const [mostrarControles, setMostrarControles] = useState(false);
  const [cantidad, setCantidad] = useState(1);

  const manejarClick = async () => {
    try {
      const respuesta = await fetch(`http://localhost:3000/productos/categoria/1`);
      if (!respuesta.ok) {
        throw new Error('Error al obtener productos relacionados');
      }
      const data = await respuesta.json();

      const productosFiltrados = data.filter((p) => p.id !== producto.id);

      navigate(`/productoPage`, {
        state: {
          productoSeleccionado: producto,
          productosRelacionados: productosFiltrados,
        },
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const manejarAgregar = () => {
    setMostrarControles(true);
  };

  const manejarComprar = () => {
    agregarProducto({ ...producto, cantidad }); 
    setMostrarControles(false); 
    setCantidad(1);
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
          objectFit: 'contain',
        }}
        onClick={manejarClick}
      />
      <div className="card-body align-items-center">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">S/ {producto.precio.toFixed(2)}</p>
        {!mostrarControles && (
          <button
            className="btn btn-success"
            style={{ backgroundColor: 'green', border: 'none' }}
            onClick={manejarAgregar}
          >
            Agregar
          </button>
        )}
        {mostrarControles && (
          <div>
            <p>Precio: S/ {producto.precio.toFixed(2)}</p>
            <div className="d-flex align-items-center justify-content-center mb-2">
              <button className="btn btn-secondary me-2" onClick={disminuirCantidad}>
                -
              </button>
              <span>{cantidad}</span>
              <button className="btn btn-secondary ms-2" onClick={aumentarCantidad}>
                +
              </button>
            </div>
            <button className="btn btn-primary" onClick={manejarComprar}>
              Comprar
            </button>
          </div>
        )}
      </div>
      {error && <p>Error al cargar productos: {error}</p>}
    </div>
  );
};

export default ProductoResumido;
