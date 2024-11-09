import React from 'react';
import PromocionesCarrusel from '../components/PromocionesCarrusel';
import CategoriaCarrusel from '../components/CategoriaCarrusel';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Footer from "../components/Footer";
import Header from "../components/Header";

const LandingPage = () => {
  // Nuevos datos simulados de productos relacionados con un supermercado
  const productos = [
    { id: 1, nombre: 'Manzanas Frescas', precio: 5.50, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/limon.webp`, categoria: 'Frutas y Verduras' },
    { id: 2, nombre: 'Pechuga de Pollo', precio: 15.00, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/pechuga.jpg`, categoria: 'Carnes y Aves' },
    { id: 3, nombre: 'Leche Entera GLORIA', precio: 3.80, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/leche.jpg`, categoria: 'Lácteos y Huevos' },
    { id: 4, nombre: 'Jugo de Naranja', precio: 7.20, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/naranja.jpg`, categoria: 'Bebidas' },
    { id: 5, nombre: 'Chocolates Sublime', precio: 2.50, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/sublime.jpg`, categoria: 'Snacks y Dulces' },
    
    // Nuevos productos con distintos nombres
    { id: 6, nombre: 'Tomates Orgánicos', precio: 4.00, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/limon.webp`, categoria: 'Frutas y Verduras' },
    { id: 7, nombre: 'Filete de Res', precio: 25.00, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/pechuga.jpg`, categoria: 'Carnes y Aves' },
    { id: 8, nombre: 'Yogurt Natural', precio: 6.50, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/leche.jpg`, categoria: 'Lácteos y Huevos' },
    { id: 9, nombre: 'Agua Mineral', precio: 1.50, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/naranja.jpg`, categoria: 'Bebidas' },
    { id: 10, nombre: 'Galletas Integrales', precio: 3.00, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/sublime.jpg`, categoria: 'Snacks y Dulces' },
    
    // Más productos con distintos nombres
    { id: 11, nombre: 'Zanahorias Frescas', precio: 3.20, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/limon.webp`, categoria: 'Frutas y Verduras' },
    { id: 12, nombre: 'Costillas de Cerdo', precio: 22.00, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/pechuga.jpg`, categoria: 'Carnes y Aves' },
    { id: 13, nombre: 'Queso Fresco', precio: 8.00, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/leche.jpg`, categoria: 'Lácteos y Huevos' },
    { id: 14, nombre: 'Cerveza Artesanal', precio: 12.00, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/naranja.jpg`, categoria: 'Bebidas' },
    { id: 15, nombre: 'Barra de Granola', precio: 2.20, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/sublime.jpg`, categoria: 'Snacks y Dulces' },


    { id: 16, nombre: 'Zanahorias nada', precio: 3.20, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/limon.webp`, categoria: 'Frutas y Verduras' },
    { id: 17, nombre: 'Costillas de nada', precio: 22.00, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/pechuga.jpg`, categoria: 'Carnes y Aves' },
    { id: 18, nombre: 'Queso nada', precio: 8.00, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/leche.jpg`, categoria: 'Lácteos y Huevos' },
    { id: 19, nombre: 'Cerveza nada', precio: 12.00, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/naranja.jpg`, categoria: 'Bebidas' },
    { id: 20, nombre: 'Barra de nada', precio: 2.20, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/sublime.jpg`, categoria: 'Snacks y Dulces' },

    
    { id: 21, nombre: 'Zanahorias nada', precio: 3.20, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/limon.webp`, categoria: 'Frutas y Verduras' },
    { id: 22, nombre: 'Costillas de nada', precio: 22.00, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/pechuga.jpg`, categoria: 'Carnes y Aves' },
    { id: 23, nombre: 'Queso nada', precio: 8.00, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/leche.jpg`, categoria: 'Lácteos y Huevos' },
    { id: 24, nombre: 'Cerveza nada', precio: 12.00, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/naranja.jpg`, categoria: 'Bebidas' },
    { id: 25, nombre: 'Barra de nada', precio: 2.20, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/sublime.jpg`, categoria: 'Snacks y Dulces' },

    
    { id: 26, nombre: 'Zanahorias nada', precio: 3.20, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/limon.webp`, categoria: 'Frutas y Verduras' },
    { id: 27, nombre: 'Costillas de nada', precio: 22.00, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/pechuga.jpg`, categoria: 'Carnes y Aves' },
    { id: 28, nombre: 'Queso nada', precio: 8.00, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/leche.jpg`, categoria: 'Lácteos y Huevos' },
    { id: 29, nombre: 'Cerveza nada', precio: 12.00, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/naranja.jpg`, categoria: 'Bebidas' },
    { id: 30, nombre: 'Barra de nada', precio: 2.20, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/sublime.jpg`, categoria: 'Snacks y Dulces' }
  ];
  
  
  // Nuevos datos simulados de promociones
  const promociones = [
    { id: 1, titulo: 'Promoción de Frutas', descripcion: '15% de descuento en frutas frescas', imagen: `${process.env.PUBLIC_URL}/imagenes/productos/promocion1.jpg` },
    { id: 2, titulo: 'Oferta Especial de Pollo', descripcion: 'Descuento en carnes y aves', imagen: `${process.env.PUBLIC_URL}/imagenes/productos/promocion2.png` },
  ];
  
  return (
    <>
      <Header/>
      <div className="landing-page">
        <PromocionesCarrusel promociones={promociones} />
        <div className='mt-5'>
        <CategoriaCarrusel productos={productos} mostrarBanner={true} />


        </div>

      </div>
      <Footer/>
    </>
  );
};

export default LandingPage;
