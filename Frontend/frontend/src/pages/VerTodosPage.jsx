import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductoResumido from '../components/ProductoResumido';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VerTodosPage = () => {
  const { categoriaId } = useParams();
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [orden, setOrden] = useState('');
  const [rangoPrecio, setRangoPrecio] = useState([0, 100]);
  const [dropdownAbierto, setDropdownAbierto] = useState(false);

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

  useEffect(() => {
    const productosFiltradosPorCategoria = productos.filter(
      producto => producto.categoria.toLowerCase() === categoriaId.toLowerCase()
    );
    const productosRangoFiltrados = productosFiltradosPorCategoria.filter(
      producto => producto.precio >= rangoPrecio[0] && producto.precio <= rangoPrecio[1]
    );

    let productosOrdenados = [...productosRangoFiltrados];
    if (orden === 'Nombre Ascendente') {
      productosOrdenados.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (orden === 'Nombre Descendente') {
      productosOrdenados.sort((a, b) => b.nombre.localeCompare(a.nombre));
    } else if (orden === 'Precio Ascendente') {
      productosOrdenados.sort((a, b) => a.precio - b.precio);
    } else if (orden === 'Precio Descendente') {
      productosOrdenados.sort((a, b) => b.precio - a.precio);
    }

    setProductosFiltrados(productosOrdenados);
  }, [categoriaId, orden, rangoPrecio]);

  const toggleDropdown = () => {
    setDropdownAbierto(!dropdownAbierto);
  };

  const handleOrdenChange = (ordenSeleccionado) => {
    setOrden(ordenSeleccionado);
    setDropdownAbierto(false);
  };

  return (
    <>
      <Header />
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '20px', minHeight: '80vh' }}>
        <div style={{ flex: '1', maxWidth: '300px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h4 style={{ marginBottom: '20px' }}>Filtros</h4>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Rango de Precio:</label>
            <div style={{ marginBottom: '5px' }}>
              <label style={{ display: 'block', fontWeight: 'normal' }}>Mínimo</label>
              <input
                type="range"
                min="0"
                max="100"
                value={rangoPrecio[0]}
                onChange={e => setRangoPrecio([parseFloat(e.target.value), rangoPrecio[1]])}
                style={{ width: '100%' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontWeight: 'normal' }}>Máximo</label>
              <input
                type="range"
                min="0"
                max="100"
                value={rangoPrecio[1]}
                onChange={e => setRangoPrecio([rangoPrecio[0], parseFloat(e.target.value)])}
                style={{ width: '100%' }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', width: '45%' }}>
                <span>S/</span>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={rangoPrecio[0]}
                  onChange={e => setRangoPrecio([parseFloat(e.target.value), rangoPrecio[1]])}
                  className="form-control"
                  style={{ marginLeft: '5px', flex: 1 }}
                />
              </div>
              <span>-</span>
              <div style={{ display: 'flex', alignItems: 'center', width: '45%' }}>
                <span>S/</span>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={rangoPrecio[1]}
                  onChange={e => setRangoPrecio([rangoPrecio[0], parseFloat(e.target.value)])}
                  className="form-control"
                  style={{ marginLeft: '5px', flex: 1 }}
                />
              </div>
            </div>
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Ordenar por:</label>
            <div className={`dropdown ${dropdownAbierto ? 'show' : ''}`}>
              <button
                className="btn btn-secondary dropdown-toggle w-100"
                type="button"
                onClick={toggleDropdown}
              >
                {orden ? orden : 'Selecciona'}
              </button>
              <ul className={`dropdown-menu ${dropdownAbierto ? 'show' : ''}`} style={{ width: '100%' }}>
                <li><button className="dropdown-item" onClick={() => handleOrdenChange('Nombre Ascendente')}>Nombre Ascendente</button></li>
                <li><button className="dropdown-item" onClick={() => handleOrdenChange('Nombre Descendente')}>Nombre Descendente</button></li>
                <li><button className="dropdown-item" onClick={() => handleOrdenChange('Precio Ascendente')}>Precio Ascendente</button></li>
                <li><button className="dropdown-item" onClick={() => handleOrdenChange('Precio Descendente')}>Precio Descendente</button></li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ flex: '3', maxWidth: '800px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{categoriaId}</h2>
          {productosFiltrados.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {productosFiltrados.map(producto => (
                <ProductoResumido key={producto.id} producto={producto} />
              ))}
            </div>
          ) : (
            <p style={{ textAlign: 'center' }}>No hay productos disponibles.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VerTodosPage;
