import React from 'react';
import ProductoResumido from './ProductoResumido';

const CategoriaCarrusel = ({ productos }) => {
  // Obtener categorías únicas
  const categorias = [...new Set(productos.map(producto => producto.categoria))];

  return (
    <div>
      {categorias.map((categoria, index) => (
        <div key={index} className="categoria-carrusel my-4">
          <h3>{categoria}</h3>
          {/* ID único asegurado */}
          <div id={`categoriaCarrusel${index}`} className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {productos
                .filter(producto => producto.categoria === categoria)
                .map((producto, idx) => (
                  <div key={producto.id} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                    <ProductoResumido producto={producto} />
                  </div>
                ))}
            </div>
            {/* Mostrar controles solo si hay más de un producto */}
            {productos.filter(producto => producto.categoria === categoria).length > 1 && (
              <>
                <button className="carousel-control-prev" type="button" data-bs-target={`#categoriaCarrusel${index}`} data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#categoriaCarrusel${index}`} data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriaCarrusel;
