import React, { useState } from 'react';
import ProductoResumido from './ProductoResumido';

const CarruselProductos = ({ productos }) => {
  // Estado para manejar el grupo activo (3 productos por grupo)
  const [grupoActivo, setGrupoActivo] = useState(0);

  // Dividir productos en grupos de 3
  const dividirEnGrupos = (productos, cantidadPorGrupo = 3) => {
    const grupos = [];
    for (let i = 0; i < productos.length; i += cantidadPorGrupo) {
      grupos.push(productos.slice(i, i + cantidadPorGrupo));
    }
    return grupos;
  };

  const grupos = dividirEnGrupos(productos);

  // Función para manejar el botón "siguiente"
  const manejarSiguiente = () => {
    setGrupoActivo((prev) => (prev + 1) % grupos.length);
  };

  // Función para manejar el botón "anterior"
  const manejarAnterior = () => {
    setGrupoActivo((prev) => (prev - 1 + grupos.length) % grupos.length);
  };

  return (
    <div className="carousel" style={{ margin: '0 auto', padding: '20px 0', position: 'relative' }}>
      {/* Renderizar el grupo activo */}
      {grupos.length > 0 && (
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-center">
              {grupos[grupoActivo].map((producto) => (
                <div key={producto.id} style={{ flex: '0 0 33.333%', maxWidth: '33.333%' }}>
                  <ProductoResumido producto={producto} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Mostrar controles solo si hay más de un grupo */}
      {grupos.length > 1 && (
        <>
          <button
            className="carousel-control-prev"
            type="button"
            onClick={manejarAnterior}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              left: '10px',
              zIndex: 2,
            }}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" style={{ transform: 'scale(0.7)' }}></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={manejarSiguiente}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              right: '10px',
              zIndex: 2,
            }}
          >
            <span className="carousel-control-next-icon" aria-hidden="true" style={{ transform: 'scale(0.7)' }}></span>
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  );
};

export default CarruselProductos;