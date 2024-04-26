import React, { useState } from 'react';
import '../styles/Grid.css';

const Grid = () => {
  const [hoverClass, setHoverClass] = useState('');

  const handleHover = (col) => {
    setHoverClass(`hover-${col}`);
  };

  return (
    <div className="container">
      <div className={`grid ${hoverClass}`}>
        <div 
            className="col left" 
            onClick={() => handleHover('left')} 
            key="left"
        >
        </div>
        <div 
            className="col center" 
            onClick={() => handleHover('center')} 
            key="center"
        >
        </div>
        <div 
            className="col right" 
            onClick={() => handleHover('right')} 
            key="right"
        >
        </div>
      </div>
    </div>
  );
};

export default Grid;
