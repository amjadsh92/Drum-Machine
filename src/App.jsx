/* eslint-disable */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState, useEffect } from "react";
import "./styles/App.css"
import "./styles/colors.css"
import "./styles/sizes.css"
import "./styles/fonts.css"




function App() {
  
  
  
  return (
    <div className="p-1px bg-secondary vh-100 align-content-center">
      <div className="d-flex gap-5 w-650px h-320px mx-auto border border-4 border-warning align-items-center bg-custom-gray">
          
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

        <div id="displayBox" className="displayBox d-flex gap-4 flex-column align-items-center">
          <div className="power">
          <p className="text-center fw-black fs-6 mb-0">Power</p>
          <div className="power-switcher">
            <button className="float-start cursor-pointer w-45 h-100 bg-primary"></button>
          </div>

          </div>
          
          <div className="display">

          </div>
          <div className="volume"></div>
          <div className="bank"></div>
          
        </div>

      </div>
      
    </div>
  );
}

export default App