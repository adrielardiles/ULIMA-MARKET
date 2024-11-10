
import React, { createContext, useState, useContext } from 'react';

const CarritoContext = createContext();

export const useCarrito = () => {
  return useContext(CarritoContext);
};

export const CarritoProvider = ({ children }) => {
  const [productosCarrito, setProductosCarrito] = useState([]);

  const agregarProducto = (producto) => {
    setProductosCarrito((prevProductos) => {
      const productoExistente = prevProductos.find(p => p.id === producto.id);
  
      if (productoExistente) {

        return prevProductos.map(p =>
          p.id === producto.id ? { ...p, cantidad: producto.cantidad } : p
        );
      }
  

      return [...prevProductos, producto];
    });
  };
  

  const eliminarProducto = (id) => {
    setProductosCarrito((prev) => prev.filter((producto) => producto.id !== id));
  };

  const vaciarCarrito = () => {
    setProductosCarrito([]);
  };

  return <>
    <CarritoContext.Provider value={{ productosCarrito, agregarProducto, eliminarProducto, vaciarCarrito }}>
      {children}
    </CarritoContext.Provider>
  </>
};
