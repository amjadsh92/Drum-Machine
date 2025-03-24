git push -u origin new-branch-name
/* eslint-disable */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState, useEffect, useRef } from "react";
import "./styles/App.css";
import "./styles/colors.css";
import "./styles/sizes.css";
import "./styles/fonts.css";

function App() {
  const [heaterKit, setHeaterKit] = useState(true);
  const [displayContent, setDisplayContent] = useState("Heater Kit");
  const [contentVersion, setContentVersion] = useState(0);
  const [volume, setVolume] = useState(50);
  const [powerOn, setPowerOn] = useState(true);
  const [keyPressed, setKeyPressed] = useState("");
  const [keyUp, setKeyUp] = useState(true)
  const [keyRepeated, setKeyRepeated] = useState(false)
  const [clickedPads, setClickedPads] = useState({}); // Track clicked pads

  const changeContent = (value) => {
    setDisplayContent(value);
    setContentVersion((prev) => prev + 1);
  };

  useEffect(() => {
    divRef.current?.focus();
  }, []);

  const divRef = useRef(null);

  const keys = "QWEASDZXC".split("");

  const handleKeyPress = (event) => {
   
    
    if (event.repeat) {
       setKeyRepeated(true)
    }
    else{
      setKeyRepeated(false)
    }

    
  
    const key = event.key.toUpperCase();
    if (powerOn && keys.includes(key)) {
      setKeyPressed(key);
      setKeyUp(false)
      setClickedPads((prev) => ({ ...prev, [key]: true })); // Mark pad as clicked
    }
  };

  const handleKeyUp = (event) =>{

    const key = event.key.toUpperCase();
    if (powerOn && key === keyPressed) {
      setKeyUp(true);
      setClickedPads((prev) => ({ ...prev, [key]: false })); // Mark pad as unclicked
    }

  }

  const sounds1 = {
    heater1:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    heater2:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
    heater3:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    heater4:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
    clap: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    openHH:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    kicknHat:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    kick: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    closedHH:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
  };

  const sounds2 = {
    chord1: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    chord2: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    chord3: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    shaker: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    openHH: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    closedHH: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    punchyKick: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    sideStick: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    snare: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  };

  const sounds = { sounds1, sounds2 };

  return (
    <div
      ref={divRef}
      className="p-1px bg-secondary vh-100 align-content-center"
      tabIndex="0"
      onKeyDown={handleKeyPress}
      onKeyUp = {handleKeyUp}
    >
      <div className="d-flex gap-5 w-650px h-320px mx-auto border border-4 border-warning align-items-center bg-custom-gray">
        <DrumMachine
          powerOn={powerOn}
          heaterKit={heaterKit}
          sounds={sounds}
          setContent={changeContent}
          volume={volume}
          setKeyUp = {setKeyUp}
          keyUp = {keyUp}
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          keyRepeated ={keyRepeated}
        />
        <DisplayBox
          heaterKit={heaterKit}
          setHeaterKit={setHeaterKit}
          powerOn={powerOn}
          setPowerOn={setPowerOn}
          contentVersion={contentVersion}
          content={displayContent}
          setContent={changeContent}
          setVolume={setVolume}
          volume={volume}
        />
      </div>
    </div>
  );
}

function DrumMachine({
  heaterKit,
  sounds,
  setContent,
  volume,
  keyUp,
  setKeyUp,
  keyPressed,
  setKeyPressed,
  powerOn,
  keyRepeated
}) {
  const {
    heater1,
    heater2,
    heater3,
    heater4,
    clap,
    openHH,
    kicknHat,
    kick,
    closedHH,
  } = sounds.sounds1;
  const { chord1, chord2, chord3, shaker, punchyKick, sideStick, snare } =
    sounds.sounds2;
  const namesOfSounds1 = Object.keys(sounds.sounds1);
  const namesOfSounds2 = Object.keys(sounds.sounds2);

  const drumPads = [
    { letter: "Q", heaterSound: heater1, chordSound: chord1 },
    { letter: "W", heaterSound: heater2, chordSound: chord2 },
    { letter: "E", heaterSound: heater3, chordSound: chord3 },
    { letter: "A", heaterSound: heater4, chordSound: shaker },
    { letter: "S", heaterSound: clap, chordSound: openHH },
    { letter: "D", heaterSound: openHH, chordSound: closedHH },
    { letter: "Z", heaterSound: kicknHat, chordSound: punchyKick },
    { letter: "X", heaterSound: kick, chordSound: sideStick },
    { letter: "C", heaterSound: closedHH, chordSound: snare },
  ];

  return (
    <div id="drum-machine" className="drum-machine">
      {drumPads.map(({ letter, heaterSound, chordSound }, index) => (
        <Drumpad
          key={letter}
          sound={heaterKit ? heaterSound : chordSound}
          letter={letter}
          setContent={setContent}
          name={heaterKit ? namesOfSounds1[index] : namesOfSounds2[index]}
          powerOn={powerOn}
          volume={volume}
          keyUp = {keyUp}
          setKeyUp = {setKeyUp}
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          keyRepeated = {keyRepeated}
        />
      ))}
    </div>
  );
}

function DisplayBox({
  heaterKit,
  setHeaterKit,
  content,
  setContent,
  contentVersion,
  volume,
  setVolume,
  powerOn,
  setPowerOn,
}) {
  const [volumeChanged, setVolumeChanged] = useState(false);

  return (
    <div
      id="displayBox"
      className="displayBox d-flex gap-3 flex-column align-items-center"
    >
      <Power powerOn={powerOn} setPowerOn={setPowerOn} />
      <Display
        content={content}
        setContent={setContent}
        contentVersion={contentVersion}
        setVolumeChanged={setVolumeChanged}
        volumeChanged={volumeChanged}
        volume={volume}
        powerOn={powerOn}
      />
      <Volume
        volume={volume}
        setVolume={setVolume}
        setVolumeChanged={setVolumeChanged}
        content={content}
        powerOn={powerOn}
      />
      <Bank
        heaterKit={heaterKit}
        setHeaterKit={setHeaterKit}
        setContent={setContent}
        powerOn={powerOn}
      />
    </div>
  );
}

function Power({ powerOn, setPowerOn }) {
  const togglePower = () => {
    setPowerOn(!powerOn);
  };

  return (
    <div className="power">
      <p className="text-center fw-black fs-6 mb-0">Power</p>
      <div className="power-switcher" onClick={togglePower}>
        <button
          className={`${powerOn ? "float-end" : "float-start"} cursor-pointer w-45 h-100 bg-primary`}
          onClick={togglePower}
        ></button>
      </div>
    </div>
  );
}

function Display({
  content,
  contentVersion,
  volume,
  volumeChanged,
  setVolumeChanged,
  powerOn,
}) {
  const timeoutRef = useRef(null);

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    setVolumeChanged(false);
  }, [contentVersion]);

  if (volumeChanged) {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setVolumeChanged(false);
    }, 2000);
  }

  return (
    <div className={"display text-center align-content-center fw-black"}>
      {powerOn ? (volumeChanged ? `volume = ${volume}%` : content) : ""}
    </div>
  );
}

function Volume({ setVolume, setVolumeChanged, powerOn }) {
  function adjustVolume(e) {
    setVolume(Number(e.target.value));
    setVolumeChanged(true);
  }

  return (
    <input
      type="range"
      className="form-range"
      id="customRange"
      min="0"
      max="100"
      step="1"
      onChange={() => adjustVolume(event)}
      disabled={powerOn ? false : true}
    />
  );
}

function Bank({ heaterKit, setHeaterKit, setContent, powerOn }) {
  function toggleHeaterKit() {
    setHeaterKit(!heaterKit);
    setContent(heaterKit ? "Smooth Piano Kit" : "Heater Kit");
  }

  return (
    <div className="bank">
      <p className="text-center fw-black fs-6 mb-0">Bank</p>
      <div className="bank-switcher" onClick={powerOn ? toggleHeaterKit : ""}>
        <button
          className={` ${heaterKit ? "float-start" : "float-end"} cursor-pointer w-45 h-100 bg-primary`}
          onClick={toggleHeaterKit}
          disabled={powerOn ? false : true}
        ></button>
      </div>
    </div>
  );
}

function Drumpad({
  sound,
  letter,
  setContent,
  name,
  volume,
  keyUp,
  setKeyUp,
  keyPressed,
  setKeyPressed,
  powerOn,
  keyRepeated
}) {
  const [isClicked, setIsClicked] = useState(false);
  const audioRef = useRef(null);
  debugger;
  const playSound = () => {
    setIsClicked(true);
    if(keyRepeated){
      
      return
    }
    
    setContent(name);
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    
  }
  };

  useEffect(() => {
    if (keyPressed === letter) {
      playSound();
      if (keyUp){
        setIsClicked(false);
        setKeyPressed("")
      };
    }
  });

  

  return (
    <>
      <button
        id={letter}
        className={`${isClicked ? "drum-pad-clicked" : "drum-pad"}`}
        onClick={powerOn ? playSound : ""}
        value={letter}
        disabled={powerOn ? false : true}
      >
        {letter}
      </button>
      <audio ref={audioRef} id={`audio-${letter}`} src={sound}></audio>
    </>
  );
}

export default App;
