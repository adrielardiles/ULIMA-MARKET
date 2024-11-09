import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductoResumido from './ProductoResumido';
import BannerPromocion from './BannerPromocion';
import CarouselControls from './CarouselControls';
import CarouselContent from './CarouselContent';

const CategoriaCarrusel = ({ productos }) => {
  // Get unique categories
  const categorias = [...new Set(productos.map(producto => producto.categoria))];

  // State for managing active group index for each category
  const [grupoActivoPorCategoria, setGrupoActivoPorCategoria] = useState({});

  // Function to divide products into groups of 3 items
  const dividirEnGrupos = (productos, cantidadPorGrupo = 3) => {
    const grupos = [];
    for (let i = 0; i < productos.length; i += cantidadPorGrupo) {
      grupos.push(productos.slice(i, i + cantidadPorGrupo));
    }
    return grupos;
  };

  // Handle the "next" button
  const manejarSiguiente = (categoria, totalGrupos) => {
    setGrupoActivoPorCategoria(prev => ({
      ...prev,
      [categoria]: ((prev[categoria] || 0) + 1) % totalGrupos
    }));
  };

  // Handle the "previous" button
  const manejarAnterior = (categoria, totalGrupos) => {
    setGrupoActivoPorCategoria(prev => ({
      ...prev,
      [categoria]: (prev[categoria] !== undefined
        ? (prev[categoria] - 1 + totalGrupos) % totalGrupos
        : totalGrupos - 1)
    }));
  };

  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
      {categorias.map((categoria, index) => {
        const productosPorCategoria = productos.filter(producto => producto.categoria === categoria);
        const grupos = dividirEnGrupos(productosPorCategoria);
        const grupoActivo = grupoActivoPorCategoria[categoria] || 0;

        return (
          <div key={index} className="categoria-carrusel my-4">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ textAlign: 'left' }}>{categoria}</h3>
              <Link
                to={`/mostrarTodo/${categoria}`}
                style={{ color: 'orange', textDecoration: 'underline' }}
              >
                Ver Todos
              </Link>
            </div>
            <div
              onClick={() => navigate(`/mostrarTodo/${categoria}`)}
              style={{ cursor: 'pointer' }}
            >
              <BannerPromocion categoriaId={categoria.toLowerCase().replace(/\s/g, '')} />
            </div>
            <div className="carousel" style={{ margin: '0 auto', padding: '20px 0', position: 'relative' }}>
              <CarouselContent grupos={grupos} grupoActivo={grupoActivo}>
                {grupos[grupoActivo].map(producto => (
                  <ProductoResumido key={producto.id} producto={producto} productos={productos} />
                ))}
              </CarouselContent>
              {grupos.length > 1 && (
                <CarouselControls
                  onSiguiente={() => manejarSiguiente(categoria, grupos.length)}
                  onAnterior={() => manejarAnterior(categoria, grupos.length)}
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
