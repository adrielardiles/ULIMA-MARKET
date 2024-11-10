import React from 'react';

const TarjetaPregunta = ({ pregunta, respuesta, estaExpandido, alHacerClick }) => {
  return <>
    <div 
      className="accordion-item mb-5 border rounded" 
      style={{ borderColor: '#FFA500', borderWidth: '1px' }} 
    > 
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${estaExpandido ? '' : 'collapsed'}`}
          type="button"
          onClick={alHacerClick}
          aria-expanded={estaExpandido}
          style={{
            backgroundColor: estaExpandido ? 'rgba(255, 165, 0, 0.4)' : '', 
            color: 'black', 
            borderColor: '#FFA500', 
            borderWidth: '1px', 
            boxShadow: estaExpandido ? '0 0 0 0.25rem rgba(255, 165, 0, 0.5)' : '', 
            outline: 'none'
          }}
        >
          {pregunta}
        </button>
      </h2>
      <div
        className={`accordion-collapse collapse ${estaExpandido ? 'show' : ''}`}
        style={{
          borderColor: '#FFA500', 
          borderTop: estaExpandido ? '1px solid #FFA500' : 'none', 
          borderWidth: '1px', 
        }}
      >
        <div className="accordion-body">
          {respuesta}
        </div>
      </div>
    </div>
  </>
};

export default TarjetaPregunta;
