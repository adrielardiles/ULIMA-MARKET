import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductoResumido from './ProductoResumido';
import BannerPromocion from './BannerPromocion';
import CarrucelControles from './CarrucelControles';
import ContenidoCarrusel from './ContenidoCarrusel';

const CategoriaCarrusel = ({ productos }) => {

  const categorias = [...new Set(productos.map(producto => producto.categoria))];
  const [grupoActivoPorCategoria, setGrupoActivoPorCategoria] = useState({});


  const dividirEnGrupos = (productos, cantidadPorGrupo = 3) => {
    const grupos = [];
    for (let i = 0; i < productos.length; i += cantidadPorGrupo) {
      grupos.push(productos.slice(i, i + cantidadPorGrupo));
    }
    return grupos;
  };


  const manejarSiguiente = (categoria, totalGrupos) => {
    setGrupoActivoPorCategoria(prev => ({
      ...prev,
      [categoria]: ((prev[categoria] || 0) + 1) % totalGrupos
    }));
  };


  const manejarAnterior = (categoria, totalGrupos) => {
    setGrupoActivoPorCategoria(prev => ({
      ...prev,
      [categoria]: (prev[categoria] !== undefined
        ? (prev[categoria] - 1 + totalGrupos) % totalGrupos
        : totalGrupos - 1)
    }));
  };

  return <>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
      {categorias.map((categoria, index) => {
        const productosPorCategoria = productos.filter(producto => producto.categoria === categoria);
        const grupos = dividirEnGrupos(productosPorCategoria);
        const grupoActivo = grupoActivoPorCategoria[categoria] || 0;

        return (
          <div key={index} className="categoria-carrusel my-4">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3>{categoria}</h3>
              <Link to={`/mostrarTodo/${encodeURIComponent(categoria)}`} style={{ color: 'orange', textDecoration: 'underline' }}>
                Ver Todos
              </Link>
            </div>
            <BannerPromocion categoriaId={categoria.toLowerCase().replace(/\s/g, '')} />
            <div className="carousel" style={{ margin: '0 auto', padding: '20px 0', position: 'relative' }}>
              <ContenidoCarrusel grupos={grupos} grupoActivo={grupoActivo}>
                {grupos[grupoActivo].map(producto => (
                  <ProductoResumido key={producto.id} producto={producto} />
                ))}
              </ContenidoCarrusel>
              {grupos.length > 1 && (
                <CarrucelControles
                  onSiguiente={() => manejarSiguiente(categoria, grupos.length)}
                  onAnterior={() => manejarAnterior(categoria, grupos.length)}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
    </>
};

export default CategoriaCarrusel;
