import React, { useState } from 'react';
import CategoriasBar from './CategoriaBar';
import CategoriasMenu from './CategoriaMenu';

const Categorias = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Nuevas categorías relacionadas con un supermercado
  const categorias = ['Frutas y Verduras', 'Carnes y Aves', 'Lácteos y Huevos', 'Bebidas', 'Snacks y Dulces'];

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        backgroundColor: '#f89e32',
        padding: '10px 0',
        marginTop: '10px',
        width: '100%',
        position: 'relative',
      }}
    >
      <CategoriasBar toggleOpen={toggleOpen} />
      {isOpen && <CategoriasMenu categorias={categorias} />}
    </div>
  );
};

export default Categorias;
