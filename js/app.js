function updateDisplay() {
        volumeDisplay.innerHTML = volValue + "";
        display.innerHTML = displayValue;
        if(!on) {
            volumeDisplay.innerHTML =  "";
            display.innerHTML = "";
        }
}


function offOn() {
    on = !on ? true: false;
    if(on) {
        powerButton.classList.add("on");
        lcdDecoration.classList.add("on");
        mainControls.classList.add("on");
        pads.classList.add("on");
        if(isSwitchLeft) {
            ledBank1.classList.add("on");
            linkSounds();
        }
        else {
            ledBank2.classList.add("on");
        }

        volValue = 50;
        displayValue = "HOLA MUNDO"; 
    } else {
        powerButton.classList.remove("on");
        lcdDecoration.classList.remove("on");
        mainControls.classList.remove("on");
        pads.classList.remove("on");
        if(isSwitchLeft)
            ledBank1.classList.remove("on");
        else
            ledBank2.classList.remove("on");
        volValue = 0;
        displayValue = ""; 
    }

    updateDisplay();
}

function manageVolume() {
    if(on) {
        if(volUpisPressed) {
            volValue = volValue + 1;
            volValue = volValue > 100 ? 100 : volValue;
        } 
        if(volDownIsPressed) {
            volValue = volValue - 1;
            volValue = volValue < 0 ? 0 : volValue;
        }    
        updateDisplay();
    }
}

function initVolumeUp() {
    volUpisPressed = true;
    manageVolume();
    idVol = setInterval(manageVolume, 75);
}

function stopVolumeUp() {
    clearInterval(idVol);
    volUpisPressed = false;
}

function initVolumeDown() {
    volDownIsPressed = true;
    manageVolume();
    idVol = setInterval(manageVolume, 75);
}

function stopVolumeDown() {
    clearInterval(idVol);
    volDownIsPressed = false;
}

function moveSwitch() {
    
    if(isSwitchLeft) {
        switchPin.classList.remove("switch-left");
        switchPin.classList.add("switch-right");
        if(on) {
            ledBank2.classList.add("on");
            ledBank1.classList.remove("on");
        }
    }
    else {
        switchPin.classList.remove("switch-right");
        switchPin.classList.add("switch-left");
        if(on) {
            ledBank1.classList.add("on");
            ledBank2.classList.remove("on");
        }
    }
    isSwitchLeft = isSwitchLeft ? false : true;
    linkSounds();
}

function linkSounds() {
    
    if(isSwitchLeft)
        for(let i = 0; i < parches.length; i++) {
            parches[i].id = soundBankOne[i]["id"];
            clips[i].src = soundBankOne[i]["url"];
        }
    else
        for(let i = 0; i < parches.length; i++) {
            parches[i].id = soundBankTwo[i]["id"];
            clips[i].src = soundBankTwo[i]["url"];
        }
    
}

function playSound(letter) {
    
    let sound = document.getElementById(letter);
    sound.volume = volValue / 100;
    if(!sound.ended)
        sound.currentTime = 0;
    sound.play();
    updateDisplay();
}

const soundBankOne = [
    {
        keyCode: 81,
        keyTrigger: 'Q',
        id: 'Heater-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'   
    },
    {
        keyCode: 87,
        keyTrigger: 'W',
        id: 'Heater-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' 
    },
    {
        keyCode: 69,
        keyTrigger: 'E',
        id: 'Heater-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' 
    },
    {
        keyCode: 65,
        keyTrigger: 'A',
        id: 'Heater-4',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' 
    },
    {
        keyCode: 83,
        keyTrigger: 'S',
        id: 'Clap',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' 
    },
      
    {
        keyCode: 68,
        keyTrigger: 'D',
        id: 'Open-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' 
    },
      
    {
        keyCode: 90,
        keyTrigger: 'Z',
        id: "Kick-n'-Hat",
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' 
    },
      
    {
        keyCode: 88,
        keyTrigger: 'X',
        id: 'Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' 
    },
      
    {
        keyCode: 67,
        keyTrigger: 'C',
        id: 'Closed-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' 
    }  
];

const soundBankTwo = [
    {
        keyCode: 81,
        keyTrigger: 'Q',
        id: 'Chord-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' 
    },
      
      {
        keyCode: 87,
        keyTrigger: 'W',
        id: 'Chord-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' 
    },
      
    {
        keyCode: 69,
        keyTrigger: 'E',
        id: 'Chord-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' 
    },
      
    {
        keyCode: 65,
        keyTrigger: 'A',
        id: 'Shaker',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' 
    },
      
    {
        keyCode: 83,
        keyTrigger: 'S',
        id: 'Open-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' 
    },
      
    {
        keyCode: 68,
        keyTrigger: 'D',
        id: 'Closed-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' 
    },
      
    {
        keyCode: 90,
        keyTrigger: 'Z',
        id: 'Punchy-Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' 
    },
      
    {
        keyCode: 88,
        keyTrigger: 'X',
        id: 'Side-Stick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' 
    },
      
    {
        keyCode: 67,
        keyTrigger: 'C',
        id: 'Snare',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' 
    }
];


function active_deactivePadWithKey(e) {
    let key = e.key;
    key = key.toUpperCase();
    let selector = ".drum-pad[data-letter=" + key + "]";
    let pad = document.querySelector(selector);
    let instr = pad.id;
    if(e.type === "keydown") {
        pad.classList.add("activated");
        playSound(key);
        displayValue = instr;
    }else {
        pad.classList.remove("activated");
    }
    updateDisplay();
}

function active_deactivePadWithClick(e) {
    let letter = e.target.innerText;
    let pad = e.target;
    let instr = pad.id;
    if(e.type === "mousedown") {
      pad.classList.add("activated");
      playSound(letter);
      displayValue = instr;
    }
    else
      pad.classList.remove("activated");
    updateDisplay();
    
}


let aux = 0;
let volValue = 50;
let displayValue = "HOLA MUNDO"; 
let on = false;
let volUpisPressed = false;
let idVol = null;
let volDownIsPressed = false;
let isSwitchLeft = true;   

const lcdDecoration = document.querySelector(".lcd-decoration");
const powerButton = document.getElementById("btn-power");
const display = document.getElementById("display");
const mainControls = document.querySelector(".main-controls");
const volumeDisplay = document.querySelector(".volume__display");
const volumeButtonUp = document.querySelector(".volume__btn-up");
const volumeButtonDown = document.querySelector(".volume__btn-down");
const ledBank1 = document.getElementById("bank1");
const ledBank2 = document.getElementById("bank2");
const switchPin = document.querySelector(".switch__pin");
const pads = document.querySelector(".pads");
const parches = document.querySelectorAll(".drum-pad");
const clips = document.querySelectorAll(".clip");
powerButton.addEventListener("click", offOn);
volumeButtonUp.addEventListener("mousedown", initVolumeUp);
volumeButtonUp.addEventListener("mouseup", stopVolumeUp);
volumeButtonDown.addEventListener("mousedown", initVolumeDown);
volumeButtonDown.addEventListener("mouseup", stopVolumeDown);
switchPin.addEventListener("click", moveSwitch);

for(let parche of parches) {
    parche.addEventListener("mousedown",active_deactivePadWithClick);
    parche.addEventListener("mouseup",active_deactivePadWithClick);
}


window.addEventListener("keydown", active_deactivePadWithKey);
window.addEventListener("keyup", active_deactivePadWithKey);




