import React, { useState, useEffect } from 'react';
import PromocionesCarrusel from '../components/PromocionesCarrusel';
import CategoriaCarrusel from '../components/CategoriaCarrusel';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
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

const LandingPage = () => {
  const [productos, setProductos] = useState([]);
  const [errorProductos, setErrorProductos] = useState(null);
  const [promociones, setPromociones] = useState([]);
  const [errorPromociones, setErrorPromociones] = useState(null);

  const fetchProductos = async () => {
    try {
      const respuesta = await fetch('http://localhost:3000/productos');
      if (!respuesta.ok) {
        throw new Error('Error al obtener los productos');
      }
      const data = await respuesta.json();
      setProductos(data);
      setErrorProductos(null);
    } catch (err) {
      setErrorProductos(err.message);
    }
  };

  const fetchPromociones = async () => {
    try {
      const respuesta = await fetch('http://localhost:3000/promociones');
      if (!respuesta.ok) {
        throw new Error('Error al obtener las promociones');
      }
      const data = await respuesta.json();
      setPromociones(data);
      setErrorPromociones(null);
    } catch (err) {
      setErrorPromociones(err.message);
    }
  };

  useEffect(() => {
    fetchProductos();
    fetchPromociones();
  }, []);

  if (errorProductos) return <div>Error al cargar productos: {errorProductos}</div>;
  if (errorPromociones) return <div>Error al cargar promociones: {errorPromociones}</div>;

  const productosFormateados = formatearProductos(productos);

  return (
    <>
      <Header />
      <div className="landing-page">
        <PromocionesCarrusel promociones={promociones} />
        <div className='mt-5'>
          <CategoriaCarrusel productos={productosFormateados} mostrarBanner={true} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
