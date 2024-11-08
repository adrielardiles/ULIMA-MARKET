import React, { useState } from 'react';
import CategoriasBar from './CategoriaBar';
import CategoriasMenu from './CategoriaMenu';


const Categorias = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Datos simulados de categorías
  const categorias = ['Electrónica', 'Ropa', 'Hogar', 'Deportes'];

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
