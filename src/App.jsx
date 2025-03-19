/* eslint-disable */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { useState, useEffect } from "react";
import "./styles/App.css"
import "./styles/colors.css"
import "./styles/sizes.css"



function App() {
  
  
  
  return (
    <div className="p-1px bg-secondary vh-100 align-content-center">
      <div className="w-650px h-320px mx-auto border border-4 border-warning bg-custom-gray align-content-center">
          
        <div id="drum-machine" className="drum-machine">
          <button className="drum-pad">Q</button>
          <button className="drum-pad">W</button>
          <button className="drum-pad">E</button>
          <button className="drum-pad">A</button>
          <button className="drum-pad">S</button>
          <button className="drum-pad">D</button>
          <button className="drum-pad">Z</button>
          <button className="drum-pad">X</button>
          <button className="drum-pad">C</button>
        </div>

      </div>
      
    </div>
  );
}

export default App