/* eslint-disable */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState, useEffect, useRef } from "react";

import "./styles/App.css"
import "./styles/colors.css"
import "./styles/sizes.css"
import "./styles/fonts.css"




function App() {
  
  const sounds = {
    heater1: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    heater2: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
    heater3: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    heater4: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
    clap: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    openHH: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    kicknHat: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    kick: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    closedHH: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
  }
  
  return (
    <div className="p-1px bg-secondary vh-100 align-content-center">
      <div className="d-flex gap-5 w-650px h-320px mx-auto border border-4 border-warning align-items-center bg-custom-gray">
          
        <DrumMachine sounds={sounds} />
        <DisplayBox />
      </div>
      
    </div>
  );
}


function DrumMachine({sounds}){

  const { heater1, heater2, heater3, heater4, clap, openHH, kicknHat, kick, closedHH } = sounds;


  return(

    <div id="drum-machine" className="drum-machine">
          <Drumpad sound = {heater1} letter = "Q" />
          <Drumpad sound = {heater2} letter = "W" />
          <Drumpad sound = {heater3} letter = "E" />
          <Drumpad sound = {heater4} letter = "A" />
          <Drumpad sound = {clap} letter = "S" />
          <Drumpad sound = {openHH} letter = "D" />
          <Drumpad sound = {kicknHat} letter = "Z" />
          <Drumpad sound = {kick} letter = "X" />
          <Drumpad sound = {closedHH} letter = "C" />
          
        </div>
  )

}


function DisplayBox(){


  return(

    <div id="displayBox" className="displayBox d-flex gap-3 flex-column align-items-center">
          <Power />
          <Display />
          <Volume />
          <Bank />
          
        </div>
  )
}


function Power(){

  return(
    <div className="power">
          <p className="text-center fw-black fs-6 mb-0">Power</p>
          <div className="power-switcher">
            <button className="float-start cursor-pointer w-45 h-100 bg-primary"></button>
          </div>

    </div>
  )
}

function Display(){

  return(
    <div className="display">

          </div>
  )

}

function Volume(){
  
  return (
    <input type="range" className="form-range" id="customRange" min="0" max="100" step="1" />
  )
}


function Bank(){
  return(

    <div className="bank">

    <p className="text-center fw-black fs-6 mb-0">Bank</p>
    <div className="bank-switcher">
      <button className="float-start cursor-pointer w-45 h-100 bg-primary"></button>
    </div>

    </div>
    
  
  )
}


function Drumpad({sound,letter}){
  
  const audioRef = useRef(null);

  const playSound = () => {
    
   
    if (audioRef.current) {
      audioRef.current.currentTime = 0; 
      audioRef.current.play();
    }
  };


  return (
    <>
    <button id={letter} className="drum-pad" onClick={playSound} value={letter}>{letter}</button>
    <audio ref={audioRef} id ={`audio-${letter}`}  src={sound}></audio>
    </>
  )
}

export default App