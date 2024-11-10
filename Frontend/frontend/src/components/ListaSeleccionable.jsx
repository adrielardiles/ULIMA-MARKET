import React from 'react';

const ListaSeleccionable = ({ titulo, elementos, elementoSeleccionado, setElementoSeleccionado, mostrarDetalle }) => {
  return <>
    <div style={{ width: '45%', marginRight: '20px' }}>
      <h4 style={{ textAlign: 'center' }}>{titulo}</h4>
      {elementos.map(elemento => (
        <div
          key={elemento.id}
          onClick={() => setElementoSeleccionado(elemento.id)}
          style={{
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            cursor: 'pointer',
            backgroundColor: elementoSeleccionado === elemento.id ? '#FFD580' : '#FFF'
          }}
        >
          <p><strong>{elemento.tipo || elemento.calle}</strong></p>
          <p>{elemento.numero || `${elemento.distrito}, ${elemento.provincia}`}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              mostrarDetalle(elemento);
            }}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'blue',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            Ver Detalles
          </button>
        </div>
      ))}
    </div>
    </>
};

export default ListaSeleccionable;
