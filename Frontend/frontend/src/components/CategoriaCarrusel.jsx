import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductoResumido from './ProductoResumido';
import BannerPromocion from './BannerPromocion';
import CarrucelControles from './CarrucelControles';
import ContenidoCarrusel from './ContenidoCarrusel';

const CategoriaCarrusel = ({ productos }) => {
  const [grupoActivoPorCategoria, setGrupoActivoPorCategoria] = useState({});

  // Agrupar productos por categoría
  const categorias = productos.length > 0 
    ? [...new Set(productos.map(producto => producto.categoriaId))]  // Únicamente categorías
    : [];

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

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
      {categorias.map((categoriaId) => {
        // Filtrar productos por categoría
        const productosPorCategoria = productos.filter(producto => producto.categoriaId === categoriaId);
        if (productosPorCategoria.length === 0) return null; // Evitar renderizado si no hay productos para la categoría

        // Dividir en grupos de productos
        const grupos = dividirEnGrupos(productosPorCategoria);
        const grupoActivo = grupoActivoPorCategoria[categoriaId] || 0;

        return (
          <div key={categoriaId} className="categoria-carrusel my-4">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3>{productosPorCategoria[0].categoriaNombre || 'Categoría Desconocida'}</h3> 
              <Link to={`/mostrarTodo/${encodeURIComponent(categoriaId)}`} style={{ color: 'orange', textDecoration: 'underline' }}>
                Ver Todos
              </Link>
            </div>
            <BannerPromocion categoriaId={categoriaId} />
            <div className="carousel" style={{ margin: '0 auto', padding: '20px 0', position: 'relative' }}>
              <ContenidoCarrusel grupos={grupos} grupoActivo={grupoActivo}>
                {grupos[grupoActivo] && grupos[grupoActivo].map(producto => (
                  <ProductoResumido key={producto.id} producto={producto} />
                ))}
              </ContenidoCarrusel>
              {grupos.length > 1 && (
                <CarrucelControles
                  onSiguiente={() => manejarSiguiente(categoriaId, grupos.length)}
                  onAnterior={() => manejarAnterior(categoriaId, grupos.length)}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriaCarrusel;
