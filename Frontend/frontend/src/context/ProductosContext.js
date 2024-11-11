
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);


  const Backend = 'http://localhost:3000';


  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    setCargando(true);
    try {
      const respuesta = await axios.get(`${Backend}/productos`);
      setProductos(respuesta.data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };


  const crearProducto = async (nuevoProducto) => {
    try {
      const respuesta = await axios.post(`${Backend}/productos`, nuevoProducto);
      setProductos([...productos, respuesta.data]);
    } catch (err) {
      setError(err.message);
    }
  };


  const obtenerProductoPorId = async (id) => {
    try {
      const respuesta = await axios.get(`${Backend}/productos/${id}`);
      return respuesta.data;
    } catch (err) {
      setError(err.message);
    }
  };


  const actualizarProducto = async (id, productoActualizado) => {
    try {
      await axios.put(`${Backend}/productos/${id}`, productoActualizado);
      // Refrescar la lista de productos después de la actualización
      obtenerProductos();
    } catch (err) {
      setError(err.message);
    }
  };


  const eliminarProducto = async (id) => {
    try {
      await axios.delete(`${Backend}/productos/${id}`);
      setProductos(productos.filter((producto) => producto.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };


  const obtenerProductosPorCategoria = async (categoria_id) => {
    try {
      const respuesta = await axios.get(`${Backend}/productos/categoria/${categoria_id}`);
      return respuesta.data;
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <ProductosContext.Provider
      value={{
        productos,
        loading: cargando,
        error,
        crearProducto,
        obtenerProductoPorId,
        actualizarProducto,
        eliminarProducto,
        obtenerProductosPorCategoria,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};
