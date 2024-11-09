import React, { useState } from 'react';

const PromocionesCarrusel = ({ promociones }) => {
  const [indiceActivo, setIndiceActivo] = useState(0);

  const manejarPrev = () => {
    setIndiceActivo((prevIndice) =>
      prevIndice === 0 ? promociones.length - 1 : prevIndice - 1
    );
  };

  const manejarNext = () => {
    setIndiceActivo((prevIndice) =>
      prevIndice === promociones.length - 1 ? 0 : prevIndice + 1
    );
  };

  const seleccionarSlide = (index) => {
    setIndiceActivo(index);
  };

  return (
    <div id="customCarousel" className="carousel slide">
      <div className="carousel-inner">
        {promociones.map((promocion, index) => (
          <div
            key={promocion.id}
            className={`carousel-item ${index === indiceActivo ? 'active' : ''}`}
          >
            <img
              src={promocion.imagen}
              className="d-block w-100"
              alt={promocion.titulo}
              style={{ height: '440px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="carousel-indicators">
        {promociones.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`btn btn-sm ${index === indiceActivo ? 'btn-dark' : 'btn-light'}`}
            style={{ margin: '0 2px', borderRadius: '50%' }}
            onClick={() => seleccionarSlide(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        onClick={manejarPrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={manejarNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default PromocionesCarrusel;
