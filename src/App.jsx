/* eslint-disable */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState, useEffect, useRef } from "react";

import "./styles/App.css"
import "./styles/colors.css"
import "./styles/sizes.css"
import "./styles/fonts.css"




function App() {
  const [heaterKit, setHeaterKit] = useState(true)  
  
  
  const sounds1 = {
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

  const sounds2 = {
    chord1:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    chord2:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    chord3:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    shaker:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    openHH:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    closedHH:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    punchyKick:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    sideStick:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    snare:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"

  }

  const sounds ={sounds1, sounds2}
  
  return (
    <div className="p-1px bg-secondary vh-100 align-content-center">
      <div className="d-flex gap-5 w-650px h-320px mx-auto border border-4 border-warning align-items-center bg-custom-gray">
          
        <DrumMachine heaterKit = {heaterKit} sounds={sounds} />
        <DisplayBox heaterKit={heaterKit} setHeaterKit ={setHeaterKit} />
      </div>
      
    </div>
  );
}


function DrumMachine({heaterKit, sounds}){

  const { heater1, heater2, heater3, heater4, clap, openHH, kicknHat, kick, closedHH } = sounds.sounds1;
  const { chord1, chord2, chord3, shaker, punchyKick, sideStick, snare } = sounds.sounds2;

  return(

    <div id="drum-machine" className="drum-machine">
          <Drumpad sound = {heaterKit ? heater1 : chord1} letter = "Q" />
          <Drumpad sound = {heaterKit ? heater2 : chord2} letter = "W" />
          <Drumpad sound = {heaterKit ? heater3 : chord3} letter = "E" />
          <Drumpad sound = {heaterKit ? heater4 : shaker} letter = "A" />
          <Drumpad sound = {heaterKit ? clap : openHH} letter = "S" />
          <Drumpad sound = {heaterKit ? openHH : closedHH} letter = "D" />
          <Drumpad sound = {heaterKit ? kicknHat : punchyKick} letter = "Z" />
          <Drumpad sound = {heaterKit ? kick : sideStick} letter = "X" />
          <Drumpad sound = {heaterKit ? closedHH : snare} letter = "C" />
          
        </div>
  )

}


function DisplayBox({heaterKit, setHeaterKit}){


  return(

    <div id="displayBox" className="displayBox d-flex gap-3 flex-column align-items-center">
          <Power />
          <Display />
          <Volume />
          <Bank heaterKit = {heaterKit} setHeaterKit={setHeaterKit} />
          
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


function Bank({heaterKit, setHeaterKit}){
   
  debugger;

  function toggleHeaterKit(){
    setHeaterKit(!heaterKit)
  }

  return(

    <div className="bank">

    <p className="text-center fw-black fs-6 mb-0">Bank</p>
    <div className="bank-switcher">
      <button className={` ${heaterKit ? "float-start" : "float-end"} cursor-pointer w-45 h-100 bg-primary`} onClick={toggleHeaterKit}></button>
    </div>

    </div>
    
  
  )
}


function Drumpad({sound,letter}){
  debugger;
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