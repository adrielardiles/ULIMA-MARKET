import React from 'react';
import PromocionesCarrusel from '../components/PromocionesCarrusel';
import CategoriaCarrusel from '../components/CategoriaCarrusel';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Footer from "../components/Footer";
import Header from "../components/Header";

const LandingPage = () => {
  // Nuevos datos simulados de productos relacionados con un supermercado
  const productos = [
    { id: 1, nombre: 'Manzanas Frescas', precio: 5.50, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/manzanas.jpg`, categoria: 'Frutas y Verduras' },
    { id: 2, nombre: 'Pechuga de Pollo', precio: 15.00, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/pechuga.jpg`, categoria: 'Carnes y Aves' },
    { id: 3, nombre: 'Leche Entera GLORIA', precio: 3.80, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/leche.jpg`, categoria: 'Lácteos y Huevos' },
    { id: 4, nombre: 'Jugo de Naranja', precio: 7.20, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/jugo.jpg`, categoria: 'Bebidas' },
    { id: 5, nombre: 'Chocolates Sublime', precio: 2.50, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/sublime.jpg`, categoria: 'Snacks y Dulces' },
  ];
  
  // Nuevos datos simulados de promociones
  const promociones = [
    { id: 1, titulo: 'Promoción de Frutas', descripcion: '15% de descuento en frutas frescas', imagen: `${process.env.PUBLIC_URL}/imagenes/productos/manzanas.jpg` },
    { id: 2, titulo: 'Oferta Especial de Pollo', descripcion: 'Descuento en carnes y aves', imagen: `${process.env.PUBLIC_URL}/imagenes/productos/pechuga.jpg` },
  ];
  
  return (
    <>
      <Header/>
      <div className="landing-page">
        <PromocionesCarrusel promociones={promociones} />
        <CategoriaCarrusel productos={productos} />
      </div>
      <Footer/>
    </>
  );
};

export default LandingPage;
