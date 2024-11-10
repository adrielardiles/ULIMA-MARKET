import React from 'react';

const CarrucelControles = ({ onSiguiente, onAnterior }) => (
  <>
    <button
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
        style={{ transform: 'scale(0.7)' }}
      ></span>
    </button>
    <button
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
        style={{ transform: 'scale(0.7)' }}
      ></span>
    </button>
  </>
);

export default CarrucelControles;
