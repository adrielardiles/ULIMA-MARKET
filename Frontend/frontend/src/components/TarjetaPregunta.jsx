import React from 'react';

const TarjetaPregunta = ({ pregunta, respuesta, estaExpandido, alHacerClick }) => {
  return (
    <div 
      className="accordion-item mb-5 border rounded" 
      style={{ borderColor: '#FFA500', borderWidth: '1px' }} // Contorno más fino
    > 
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${estaExpandido ? '' : 'collapsed'}`}
          type="button"
          onClick={alHacerClick}
          aria-expanded={estaExpandido}
          style={{
            backgroundColor: estaExpandido ? 'rgba(255, 165, 0, 0.4)' : '', // Naranja transparente
            color: 'black', // Texto de pregunta en negro
            borderColor: '#FFA500', // Línea de borde naranja
            borderWidth: '1px', // Contorno más fino para el botón
            boxShadow: estaExpandido ? '0 0 0 0.25rem rgba(255, 165, 0, 0.5)' : '', // Efecto de enfoque naranja cuando está expandido
            outline: 'none' // Remueve el outline para solo mostrar el boxShadow
          }}
        >
          {pregunta}
        </button>
      </h2>
      <div
        className={`accordion-collapse collapse ${estaExpandido ? 'show' : ''}`}
        style={{
          borderColor: '#FFA500', // Línea de borde naranja para el cuerpo expandido
          borderTop: estaExpandido ? '1px solid #FFA500' : 'none', // Línea superior cuando expandido
          borderWidth: '1px', // Contorno más fino
        }}
      >
        <div className="accordion-body">
          {respuesta}
        </div>
      </div>
    </div>
  );
};

export default TarjetaPregunta;
