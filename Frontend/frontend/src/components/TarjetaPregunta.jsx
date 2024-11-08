import React from 'react';

const TarjetaPregunta = ({ pregunta, respuesta, estaExpandido, alHacerClick }) => {
  return (
    <div className="accordion-item mb-5 border border-primary rounded"> 
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${estaExpandido ? '' : 'collapsed'}`}
          type="button"
          onClick={alHacerClick}
          aria-expanded={estaExpandido}
        >
          {pregunta}
        </button>
      </h2>
      <div
        className={`accordion-collapse collapse ${estaExpandido ? 'show' : ''}`}
      >
        <div className="accordion-body">
          {respuesta}
        </div>
      </div>
    </div>
  );
};

export default TarjetaPregunta;
