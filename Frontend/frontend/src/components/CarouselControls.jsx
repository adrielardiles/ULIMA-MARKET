import React from 'react';

const CarouselControls = ({ onSiguiente, onAnterior }) => (
  <>
    <button
      className="carousel-control-prev"
      type="button"
      onClick={onAnterior}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: '10px',
        zIndex: 2
      }}
    >
      <span
        className="carousel-control-prev-icon"
        aria-hidden="true"
        style={{ transform: 'scale(0.7)' }}
      ></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      onClick={onSiguiente}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        right: '10px',
        zIndex: 2
      }}
    >
      <span
        className="carousel-control-next-icon"
        aria-hidden="true"
        style={{ transform: 'scale(0.7)' }}
      ></span>
      <span className="visually-hidden">Next</span>
    </button>
  </>
);

export default CarouselControls;
