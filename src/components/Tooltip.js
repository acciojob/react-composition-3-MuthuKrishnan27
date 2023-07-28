import React from 'react';
import './Tooltip.css'; // Import the CSS file for styling

const Tooltip = ({ text, children }) => {
    
  return (
    <div className="tooltip-container">
      <span className="tooltip">{children}</span>
      <span className="tooltiptext">{text}</span>
    </div>
  );
};

export default Tooltip;
