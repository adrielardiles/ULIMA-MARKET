import React from 'react';

const FilaHorario = ({ dia, apertura, cierre }) => {
  return <>
    <tr>
      <td>{dia}</td>
      <td>{apertura}</td>
      <td>{cierre}</td>
    </tr>
    </>
};

export default FilaHorario;
