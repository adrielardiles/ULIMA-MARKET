import React from 'react';
import ProductoResumido from './ProductoResumido';

const ContenidoCarrusel = ({ grupos, grupoActivo }) => {
  if (!grupos || grupos.length === 0) {
    return null; // No renderiza nada si no hay grupos
  }

  return <>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="d-flex justify-content-center">
          {grupos[grupoActivo].map(producto => (
            <div key={producto.id} style={{ flex: '0 0 33.333%', maxWidth: '33.333%' }}>
              <ProductoResumido producto={producto} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
};

export default ContenidoCarrusel;
