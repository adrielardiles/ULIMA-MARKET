import React from 'react';
import FilaHorario from './FilaHorario';

const TablaHorario = ({ datosHorario }) => {
  return (
    <table className="table table-bordered text-center">
      <thead className="thead-light">
        <tr>
          <th scope="col">Día</th>
          <th scope="col">Horario Apertura</th>
          <th scope="col">Horario de Cierre</th>
        </tr>
      </thead>
      <tbody>
        {datosHorario.map((entrada, indice) => (
          <FilaHorario key={indice} dia={entrada.dia} apertura={entrada.apertura} cierre={entrada.cierre} />
        ))}
      </tbody>
    </table>
  );
};

export default TablaHorario;
