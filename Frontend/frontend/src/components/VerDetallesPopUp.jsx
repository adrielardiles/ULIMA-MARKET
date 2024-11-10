import React from 'react';

const VerDetallesPopup = ({ titulo, campos, cerrarPopup }) => {
  return <>
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
      }}
    >
      <div
        style={{
          background: '#fff',
          padding: '20px',
          borderRadius: '5px',
          width: '90%',
          maxWidth: '400px',
          position: 'relative'
        }}
      >
        <button
          onClick={cerrarPopup}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'transparent',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer'
          }}
        >
          &times;
        </button>
        <h4>{titulo}</h4>
        {campos.map((campo, index) => (
          <p key={index}><strong>{campo.etiqueta}:</strong> {campo.valor}</p>
        ))}
      </div>
    </div>
  </>
};

export default VerDetallesPopup;
