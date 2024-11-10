import React from 'react';

const CategoriasBar = ({ toggleOpen }) => {
  return <>
  <div
    onClick={toggleOpen}
    style={{
      cursor: 'pointer',
      fontWeight: 'bold',
      paddingLeft: '20px',
    }}
  >
    CATEGORÍAS ▼
  </div>
  </>
};

export default CategoriasBar;
