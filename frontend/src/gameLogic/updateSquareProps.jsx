import React from 'react';
import Square from './../components/Square.jsx';

// Función para actualizar las props de un Square específico
const updateSquareProps = (currentId, currentRow, updatedProps, existingProps = {}) => {
  // Merge de las props existentes con las nuevas props
  const newProps = {
    id: currentId,
    row: currentRow,
    colorID: 0,
    isEditable: false,
    isActive: false,
    letterInside: '',
    ...existingProps,
    ...updatedProps
  };

  // Retorna el componente Square con las props actualizadas
  return (
    <Square
      id={newProps.id}
      row={newProps.row}
      colorID={newProps.colorID}
      isEditable={newProps.isEditable}
      isActive={newProps.isActive}
      letterInside={newProps.letterInside}
    />
  );
};

export default updateSquareProps;