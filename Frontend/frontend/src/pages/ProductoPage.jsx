import React from 'react';
import { useLocation } from 'react-router-dom';
import CategoriaCarrusel from '../components/CategoriaCarrusel';
import BotonAgregar from '../components/BotonAgregar';
import Footer from "../components/Footer";
import Header from "../components/Header";

// Función para formatear los productos de manera uniforme
const formatearProductos = (productos) => {
  return productos.map(producto => ({
    id: producto.id,
    nombre: producto.nombre,
    precio: producto.precio,
    imagen: `${process.env.PUBLIC_URL}${producto.imagen || ''}`, // Asegurar la URL de la imagen
    categoriaId: producto.categoria_id || producto.categoriaId,
    categoriaNombre: producto.Categoria_Producto?.nombre || producto.categoriaNombre || 'Sin Categoría'
  }));
};

const ProductoPage = () => {
  const location = useLocation();
  const { productoSeleccionado, productosRelacionados } = location.state || {};

  console.log('Productos Relacionados:', productosRelacionados);

  if (!productoSeleccionado) {
    return <div>Producto no encontrado</div>;
  }

  const productosRelacionadosFormateados = formatearProductos(productosRelacionados);

  return (
    <>
      <Header />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <div className="d-flex flex-column align-items-center">
          <img
            src={productoSeleccionado.imagen}
            alt={productoSeleccionado.nombre}
            style={{
              maxWidth: '300px',
              height: 'auto',
              objectFit: 'contain',
              marginBottom: '20px'
            }}
          />
          <h2>{productoSeleccionado.nombre}</h2>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>S/ {productoSeleccionado.precio.toFixed(2)}</p>
          <BotonAgregar precio={productoSeleccionado.precio} />
          <div style={{ width: '100%', marginTop: '40px' }}>
            <h3>Productos Relacionados</h3>
            {productosRelacionadosFormateados && productosRelacionadosFormateados.length > 0 ? (
              <CategoriaCarrusel productos={productosRelacionadosFormateados} />
            ) : (
              <p>No hay productos relacionados disponibles.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductoPage;
