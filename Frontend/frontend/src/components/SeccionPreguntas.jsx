import React, { useState } from 'react';
import TarjetaPregunta from './TarjetaPregunta';

const SeccionPreguntas = ({ titulo, preguntasRespuestas }) => {
  const [indiceExpandido, setIndiceExpandido] = useState(null);

  const manejarToggle = (indice) => {
    setIndiceExpandido(indiceExpandido === indice ? null : indice);
  };

  return <>
    <div className="mt-5">
      <h2 className="mb-4 text-center ">{titulo}</h2>
      <div className="accordion">
        {preguntasRespuestas.map((item, index) => (
          <TarjetaPregunta
            key={index}
            pregunta={item.pregunta}
            respuesta={item.respuesta}
            estaExpandido={indiceExpandido === index}
            alHacerClick={() => manejarToggle(index)}
          />
        ))}
      </div>
    </div>
  </>
};

export default SeccionPreguntas;
