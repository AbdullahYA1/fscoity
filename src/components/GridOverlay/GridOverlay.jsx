import React from 'react';
import './GridOverlay.css';

const GridOverlay = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
      <div className="grid-overlay absolute inset-0" />
    </div>
  );
};

export default GridOverlay;
