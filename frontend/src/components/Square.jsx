import React from 'react';
import './Square.css';

const Square = ({ 
  id, 
  row, 
  colorID = 0, 
  isEditable = false, 
  isActive = false, 
  letterInside = '' 
}) => {
  // Definir colores basados en colorID
  const getColor = (colorID) => {
    const colors = {
      0: '#09090b',
      1: '#6b7280', // gray-500
      2: '#ef4444', // red-500
      3: '#3b82f6', // blue-500
      4: '#10b981', // emerald-500
      5: '#f59e0b', // amber-500
    };
    return colors[colorID] || colors[0];
  };

  const ColorVar = getColor(colorID);

  // Si el color es negro (colorID = 0), outline será gris
  const OutlineColor = colorID === 0 || colorID == null ? '#6b7280' : ColorVar;

  return (
    <div
      className={`square ${isEditable ? 'editable' : ''} ${isActive ? 'active' : ''}`}
      style={{
        outline: `2px solid ${OutlineColor}`,
        outlineOffset: '-2px',
        background: `${ColorVar}`,
        color: 'white'
      }}
      data-id={id}
      data-row={row}
    >
      {letterInside}
    </div>
  );
};

export default Square;