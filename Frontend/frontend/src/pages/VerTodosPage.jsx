import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductoResumido from '../components/ProductoResumido';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VerTodosPage = () => {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);
  const [orden, setOrden] = useState('');
  const [rangoPrecio, setRangoPrecio] = useState([0, 100]);
  const [dropdownAbierto, setDropdownAbierto] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!categoriaId) return;

    const fetchProductos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/productos/categoria/${categoriaId}`);
        if (!response.ok) {
          throw new Error(`Error al obtener productos: ${response.statusText}`);
        }
        const data = await response.json();
        setProductos(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [categoriaId]);

  const aplicarFiltrosYOrden = () => {
    let productosFiltrados = productos.filter(
      producto => producto.precio >= rangoPrecio[0] && producto.precio <= rangoPrecio[1]
    );

    if (orden === 'Nombre Ascendente') {
      productosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (orden === 'Nombre Descendente') {
      productosFiltrados.sort((a, b) => b.nombre.localeCompare(a.nombre));
    } else if (orden === 'Precio Ascendente') {
      productosFiltrados.sort((a, b) => a.precio - b.precio);
    } else if (orden === 'Precio Descendente') {
      productosFiltrados.sort((a, b) => b.precio - a.precio);
    }

    return productosFiltrados;
  };

  const toggleDropdown = () => {
    setDropdownAbierto(!dropdownAbierto);
  };

  const handleOrdenChange = (ordenSeleccionado) => {
    setOrden(ordenSeleccionado);
    setDropdownAbierto(false);
  };

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  const productosFiltradosYOrdenados = aplicarFiltrosYOrden();

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
          {productosFiltradosYOrdenados.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {productosFiltradosYOrdenados.map(producto => (
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
