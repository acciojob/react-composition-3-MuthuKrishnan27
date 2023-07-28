
import React from "react";
import Tooltip from "./Tooltip";
import './../styles/App.css';

const App = () => {
  return (
    <div>
       <Tooltip text="Tooltip text here">
        <h1 className="tooltip">Hover over me!</h1>
        <p className="tooltip">Hower over me to see another tooltip</p>
 
      </Tooltip>
    </div>
  )
}

export default App
