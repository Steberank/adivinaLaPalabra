import React from 'react';

// Función para actualizar las props de un Square específico
const updateSquareProps = (squares, targetId, targetRow, updatedProps) => {
  return squares.map(square => {
    // Si encontramos el Square que queremos actualizar
    if (square.id === targetId && square.row === targetRow) {
      // Retornamos el Square con las props actualizadas, manteniendo las existentes
      return {
        ...square, // Mantiene todas las props originales
        ...updatedProps // Sobrescribe solo las que se especifiquen
      };
    }
    // Si no es el Square que buscamos, lo retornamos sin cambios
    return square;
  });
};

export default updateSquareProps;