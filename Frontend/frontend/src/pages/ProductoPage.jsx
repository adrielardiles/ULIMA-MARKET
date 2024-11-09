import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import CategoriaCarrusel from '../components/CategoriaCarrusel';
import BotonAgregar from '../components/BotonAgregar';
import Footer from "../components/Footer";
import Header from "../components/Header";

const PaginaProducto = () => {
  const { idProducto } = useParams(); // Obtener el id del producto desde la URL
  const ubicacion = useLocation(); // Acceder a la ubicación para obtener datos
  const productoSeleccionado = ubicacion.state?.producto; // Producto seleccionado enviado desde ProductoResumido

  // Lista estática de productos para mostrar (sin conexión al backend)
  const productos = [
    { id: 1, nombre: 'Manzanas Frescas', precio: 5.50, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/limon.webp`, categoria: 'Frutas y Verduras' },
    { id: 2, nombre: 'Pechuga de Pollo', precio: 15.00, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/pechuga.jpg`, categoria: 'Carnes y Aves' },
    { id: 3, nombre: 'Leche Entera GLORIA', precio: 3.80, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/leche.jpg`, categoria: 'Lácteos y Huevos' },
    { id: 4, nombre: 'Jugo de Naranja', precio: 7.20, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/naranja.jpg`, categoria: 'Bebidas' },
    { id: 5, nombre: 'Chocolates Sublime', precio: 2.50, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/sublime.jpg`, categoria: 'Snacks y Dulces' },
    { id: 6, nombre: 'Tomates Orgánicos', precio: 4.00, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/limon.webp`, categoria: 'Frutas y Verduras' },
    { id: 7, nombre: 'Filete de Res', precio: 25.00, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/pechuga.jpg`, categoria: 'Carnes y Aves' },
    { id: 8, nombre: 'Yogurt Natural', precio: 6.50, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/leche.jpg`, categoria: 'Lácteos y Huevos' },
    { id: 9, nombre: 'Agua Mineral', precio: 1.50, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/naranja.jpg`, categoria: 'Bebidas' },
    { id: 10, nombre: 'Galletas Integrales', precio: 3.00, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/sublime.jpg`, categoria: 'Snacks y Dulces' },
    { id: 11, nombre: 'Zanahorias Frescas', precio: 3.20, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/limon.webp`, categoria: 'Frutas y Verduras' },
    { id: 12, nombre: 'Costillas de Cerdo', precio: 22.00, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/pechuga.jpg`, categoria: 'Carnes y Aves' },
    { id: 13, nombre: 'Queso Fresco', precio: 8.00, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/leche.jpg`, categoria: 'Lácteos y Huevos' },
    { id: 14, nombre: 'Cerveza Artesanal', precio: 12.00, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/naranja.jpg`, categoria: 'Bebidas' },
    { id: 15, nombre: 'Barra de Granola', precio: 2.20, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/sublime.jpg`, categoria: 'Snacks y Dulces' },
  ];

  if (!productoSeleccionado) {
    return <div>Producto no encontrado</div>;
  }

  // Filtrar productos relacionados por la misma categoría, excluyendo el producto actual
  const productosRelacionados = productos.filter(
    producto =>
      producto.categoria === productoSeleccionado.categoria &&
      producto.id !== productoSeleccionado.id
  );

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
            {productosRelacionados.length > 0 ? (
              <CategoriaCarrusel productos={productosRelacionados} />
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

export default PaginaProducto;
