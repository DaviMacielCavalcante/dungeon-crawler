let fase03 = [], fase03Inicio1morte = [], fase03Inicio2Morte = [], vidas = 3;
let redDoor, lightBlueDoor, greenDoor;
const player = '&', wall = '*' , spikes = '#', key = '@', lockedDoor = 'D', unlockedDoor = '=', button = 'O', tp = '>', paredeAtravessavelEsq = '}', paredeAtravessavelDir = '{';
const redKey = key, lightBlueKey = key, greenKey = key;
const tpLaranjaA = tp, tpLaranjaB = tp, tpVerdeA = tp, tpVerdeB = tp, tpRoxoA = tp, tpRoxoB = tp, tpAmareloA = tp, tpAmareloB = tp, tpAzulClaroA = tp, tpAzulClaroB = tp;
const darkBlueButton = button, purpleButton = button, pinkButton = button, redButton = button;
let coordPlayer = {x: 2, y: 22,};
const fixedCoords = {
    redKey: {x: 22, y: 40},
    lightBlueKey: {x: 2, y: 26},
    greenKey: {x: 18, y: 18},
    tpLaranjaA: {x: 2, y: 2},
    tpLaranjaB: {x: 53, y: 25},
    tpVerdeA: {x: 38, y: 12},
    tpVerdeB: {x: 14, y: 57},
    tpRoxoA: {x: 49, y: 29},
    tpRoxoB: {x: 38, y: 6},
    tpAmareloA: {x: 42, y: 12},
    tpAmareloB: {x: 57, y: 33},
    tpAzulClaroA: {x: 38, y: 2},
    tpAzulClaroB: {x: 57, y: 2},
    darkBlueButton: {x: 22, y: 25},
    purpleButton: {x: 6, y: 10},
    pinkButton: {x: 22, y: 50},
    redButton: {x: 52, y: 33,},
    redDoor: {x: 51, y: 2},
    greenDoor: {x: 51, y: 16},
    lightBlueDoor: {x: 41, y: 35},
};

const onload = window.addEventListener('load', (onload) => {
    document.body.style.zoom = "50%";
});

function mapa() {
    for (let i = 0; i < 60; i++) {
        fase03[i] = new Array(60);
        fase03Inicio1morte[i] = new Array(60);
        fase03Inicio2Morte[i] = new Array(60);
    };
        
    for (let i = 0; i < 60; i++) {
        for(let j = 0; j < 60; j++) {
            switch (i) {
                case 1:
                    if (j === 0 || j === 36 || j === 40 || j === 51 || j === 55 || j === 59) { 
                        fase03[i][j] = wall;
                    } else if ((j >= 6 && j <= 8) || (j >= 14 && j <= 16) || (j >= 22 && j <= 24) || (j >= 30 && j <= 32)) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 2:
                    if (j === 0 || j === 36 || j === 40 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if ((j >= 6 && j <= 8) || (j >= 10 && j <= 12) || (j >= 14 && j <= 16) || (j >= 18 && j <= 20) || (j >= 22 && j <= 24) || (j >= 26 && j <= 28) || (j >= 30 && j <= 32)) {
                        fase03[i][j] = spikes;
                    } else if (j === fixedCoords.tpLaranjaA.x) {
                        fase03[i][j] = tpLaranjaA;
                    } else if (j === fixedCoords.tpAzulClaroA.x) {
                        fase03[i][j] = tpAzulClaroA;
                    } else if (j === fixedCoords.tpAzulClaroB.x) {
                        fase03[i][j] = tpAzulClaroB;
                    } else if (j === fixedCoords.redDoor.x) {
                        redDoor = lockedDoor;
                        fase03[i][j] = redDoor;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 3: 
                    if (j === 0 || j === 36 || j === 40 || j === 51 || j === 55 || j === 59) { 
                        fase03[i][j] = wall;
                    } else if ((j >= 10 && j <= 12) || (j >= 18 && j <= 20) || (j >= 26 && j <= 28)) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 4:
                    if ((j >= 0 && j <= 32) || (j >= 36 && j <= 51) || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 5:
                    if (j === 0 || j === 36 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 6:
                    if (j === 0 || j === 36 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || j === 24 || j === 28 || j === 32) {
                        fase03[i][j] = spikes;
                    } else if (j === fixedCoords.tpRoxoB.x) {
                        fase03[i][j] = tpRoxoB;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 7:
                    if (j === 0 || j === 36 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 8:
                    if (j === 0 || (j >= 4 && j <= 47) || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 9:
                    if (j === 0 || j === 4 || j === 8 || j === 20 || j === 36 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 10:
                    if (j === 0 || j === 4 || j === 14 || j === 26 || j === 36 || (j >= 40 && j <= 47) || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === fixedCoords.purpleButton.x) {
                        fase03[i][j] = purpleButton;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 11:
                    if (j === 0 || j === 4 || j === 8 || j === 20 || j === 36 || j === 40 || j === 51 || j === 55) {
                        fase03[i][j] = wall;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 12:
                    if (j === 0 || (j >= 4 && j <= 32) || j === 36 || j === 40 || j === 51 || j === 55) {
                        fase03[i][j] = wall;
                    } else if (j === fixedCoords.tpVerdeA.x) {
                        fase03[i][j] = tpVerdeA;
                    } else if (j === fixedCoords.tpAmareloA.x) {
                        fase03[i][j] = tpAmareloA;
                    } else { 
                        fase03[i][j] = ' ';
                    }
                    break;
                case 13:
                    if (j === 0 || j === 36 || j === 40 || j === 51 || j === 55) {
                        fase03[i][j] = wall;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 14:
                    if (j === 0 || (j >= 36 && j <= 51) || (j >= 55 && j <= 59)) {
                        fase03[i][j] = wall;
                    } else if (j === 10 || j === 14 || j === 18 || j === 22 || j === 26 || j === 30) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 15:
                    if (j === 0 || (j === 36 || j === 51) || (j === 55 || j === 59)) {
                        fase03[i][j] = wall;
                    } else if (j === 40 || j === 48) {
                        fase03[i][j] = paredeAtravessavelDir;
                    } else if (j === 44) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 16:
                    if ((j >= 0 && j <= 36) || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 40 || j === 48) {
                        fase03[i][j] = paredeAtravessavelDir;
                    } else if (j === 44) {
                        fase03[i][j] = spikes;
                    } else if (j === fixedCoords.greenDoor.x) {
                        greenDoor = lockedDoor;
                        fase03[i][j] = greenDoor;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 17:
                    if (j === 0 || j === 20 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j >= 5 && j <= 16) {
                        fase03[i][j] = spikes;
                    } else if (j === 36 || j === 40 || j === 44 || j === 48) {
                        fase03[i][j] = paredeAtravessavelDir;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 18:
                    if (j === 0 || j === 20 || j === 28 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 40 || j === 48) {
                        fase03[i][j] = spikes;
                    } else if (j === 36 || j  === 44) {
                        fase03[i][j] = paredeAtravessavelDir;
                    } else if (j === fixedCoords.greenKey.x) {
                        fase03[i][j] = greenKey;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 19:
                    if (j === 0 || j === 20 || j === 24 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if ((j >= 5 && j <= 16) || j === 40 || j === 48) {
                        fase03[i][j] = spikes;
                    } else if (j === 36 || j === 48) {
                        fase03[i][j] = paredeAtravessavelDir;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 20:
                    if ((j >= 0 && j <= 20) || (j >= 24 && j <= 51) || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 21:
                    if (j === 0 || j === 20 || (j >= 37 && j <= 39) || (j >= 44 && j <= 46) || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 31 || j === 40 || j === 43) {
                        fase03[i][j] = spikes;
                    } else if (j === 24 || j === 29) {
                        fase03[i][j] = paredeAtravessavelEsq;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 22:
                    if (j === 0 || j === 20 || (j >= 37 && j <= 39) || (j >= 44 && j <= 46) || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 31 || j === 40 || j === 43) {
                        fase03[i][j] = spikes;
                    } else if (j === 24 || j === 29) {
                        fase03[i][j] = paredeAtravessavelEsq;
                    } else if (j === coordPlayer.x) {
                        fase03[i][j] = player;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 23:
                    if (j === 0 || j === 20 || j === 34 || j === 51 || j === 52 || j === 54 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 25 || j === 26 || j === 31) {
                        fase03[i][j] = spikes;
                    } else if (j === 24 || j === 29) {
                        fase03[i][j] = paredeAtravessavelEsq;  (j === fixedCoords.redDoor.x) 
                    } else if (j === 53) {
                        redDoor = lockedDoor;
                        fase03[i][j] = redDoor;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 24:
                    if ((j >= 0 && j <= 4) || (j >= 8 && j <= 16) || j === 20 || j === 34 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 26 || j === 30 || j === 31) {
                        fase03[i][j] = spikes;
                    } else if (j === 24 || j === 29) {
                        fase03[i][j] = paredeAtravessavelEsq;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 25:
                    if (j === 0 || j === 4 || j === 8 || j === 16 || j === 20 || (j >= 37 && j <= 39) || (j >= 44 && j <= 46) || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 10 || j === 26 || j === 40 || j === 43) {
                        fase03[i][j] = spikes;
                    } else if (j === 24 || j === 29) {
                        fase03[i][j] = paredeAtravessavelEsq;
                    } else if (j === fixedCoords.darkBlueButton.x) {
                        fase03[i][j] = darkBlueButton;
                    } else if (j === fixedCoords.tpLaranjaB.x) {
                        fase03[i][j] = tpLaranjaB;   
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 26:
                    if (j === 0 || j === 4 || j === 8 || j === 16 || j === 20 || (j >= 37 && j <= 39) || (j >= 44 && j <= 46) || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 10 || j === 26 || j === 40 || j === 43) {
                        fase03[i][j] = spikes;
                    } else if (j === 24 || j === 29) {
                        fase03[i][j] = paredeAtravessavelEsq; 
                    } else if (j === fixedCoords.lightBlueKey.x) {
                        fase03[i][j] = lightBlueKey;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 27:
                    if (j === 0 || j === 4 || j === 8 || j === 16 || j >= 20 && j <= 55 || j === 59) {
                        fase03[i][j] = wall
                    } else if (j === 5 || j === 6 || j === 10) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 28:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j >= 29 && j <= 39 || j === 47 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 10) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 29:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 47 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 1 || j === 3 || j === 6 || j === 10 || j === 14) {
                        fase03[i][j] = spikes;
                    } else if (j === fixedCoords.tpRoxoA.x) {
                        fase03[i][j] = tpRoxoA;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 30:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || (j > 29 && j <= 39) || j === 47 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 10) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;                
                case 31:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || (j > 16 && j <= 43) || (j > 46 && j <= 59)) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 10) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;                
                case 32:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 43|| j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 10) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;                
                case 33:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 43 || (j >= 47 && j <= 49) || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 2 || j === 3 ||j === 6 || j === 14) {
                        fase03[i][j] = spikes;
                    } else if (j === 53) {
                        fase03[i][j] = redButton;                    
                    } else if (j === 57) {
                        fase03[i][j] = tpAmareloB;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;                    
                case 34:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 43 || j === 49 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 35:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || (j >= 20 && j <= 47) || j === 49 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 58) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 36:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || j === 43 || j === 47 || j === 49 || j === 51 || j === 53 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 58) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 37:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || j === 43 || j === 47 || j === 49 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if ((j >=1 && j <=2 ) || j === 6 || j === 9 || j === 11 || j === 14 || (j >= 57 && j <= 58)) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 38:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || j === 43 || j === 47 || j === 49 || j === 50 || j === 51  || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 9 || j === 11 || (j >= 57 && j <= 58)) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 39:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || j === 24 || j === 43 || j === 47 || j === 51  || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 9 || j === 11 || j === 58) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 40:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || j === 24 || j === 43 || j === 47 || j === 51  || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 9 || j === 11 || j === 58) {
                        fase03[i][j] = spikes;
                    } else if (j === 22) {
                        fase03[i][j] = redKey;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 41:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || j === 24 || j === 43 || j === 47  || j === 51  || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if ((j >= 2 && j <= 3 ) || j === 6 || j === 9 || j === 11 || j === 14) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 42:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || (j >= 20 && j <= 43) || j === 47 || j === 49 || j === 51  || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 9 || j === 11 || j === 52 || j === 54) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 43:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 47 || j === 49 || j === 51  || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 9 || j === 11 || j === 52 || j === 54) {
                        fase03[i][j] = spikes;
                    } else if (j === 43) {
                        fase03[i][j] = paredeAtravessavelDir;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 44:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 47 || j === 49 || j === 51  || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || (j >= 24 && j <= 43) || j === 52 || j === 54 || j === 56) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 45:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 47 || j === 49 || j === 51 || j === 52 || j === 54 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 1 || j === 2 || j === 6 || j === 14 || j === 56) {
                        fase03[i][j] = spikes;
                    } else if (j === 43) {
                        fase03[i][j] = paredeAtravessavelEsq;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 46:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 47 || j === 49 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || (j >= 24 && j <= 43) || j === 56 || j === 57) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 47:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 47 || j === 49 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 56 || j === 57) {
                        fase03[i][j] = spikes;
                    } else if (j === 43) {
                        fase03[i][j] = paredeAtravessavelDir;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 48:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || (j >= 20 && j <= 43) || j === 47 || j === 49 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 56) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 49:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || j === 24 || j === 43 || j === 47 || j === 49 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 2 || j === 3 || j === 6 || j === 10 || j === 14 || j === 53 || j === 56) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 50:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || j === 24 || j === 43 || j === 47 || j === 49 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 10) {
                        fase03[i][j] = spikes;                    
                    } else if (j === 22) {
                        fase03[i][j] = pinkButton;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 51:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || j === 24 || j === 43 || j === 47 || j === 49 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 10) {
                        fase03[i][j] = spikes;                    
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 52:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || (j >= 43 && j <= 45) || j === 47 || j === 49 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 7 || j === 10) {
                        fase03[i][j] = spikes;                    
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 53:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || j === 43 || j === 45 || j === 47 || j === 49 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 1 || j === 2 || j === 10 || j === 14 || j === 53 || j === 58) {
                        fase03[i][j] = spikes;                    
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 54:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || j === 43 || j === 45 || j === 47 || j === 49 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 10 || j === 58) {
                        fase03[i][j] = spikes;                    
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 55:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || (j >= 20 && j <= 39) || j === 43 || j === 45 || (j >= 47 && j <= 49) || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 57 || j === 58) {
                        fase03[i][j] = spikes;                    
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 56:
                    if (j === 0 || j === 12 || j === 16 || j === 43 || j === 45 || j === 51 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 57 || j === 58) {
                        fase03[i][j] = spikes;                    
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 57:
                    if (j === 0 || j === 12 || j === 16 || j === 43 || (j >= 45 && j <= 48) || j === 51 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 53 || j === 58) {
                        fase03[i][j] = spikes;                    
                    } else if (j === 14) {
                        fase03[i][j] = tpVerdeA;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 58:
                    if (j === 0 || j === 12 || j === 16 || j === 43 || j === 51 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 58) {
                        fase03[i][j] = spikes;                    
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                default:
                    fase03[i][j] = wall;
                    break;
            }
        } 
    };

    for (let i = 0; i < 60; i++) {
        for(let j = 0; j < 60; j++) {
            fase03Inicio1morte[i][j] = fase03[i][j];
            fase03Inicio2Morte[i][j] = fase03[i][j];
        }
    };
}


function carregarMapa() {
    const tela = document.querySelector('#tela-jogo');
    let linha = [];
    let coluna;

    tela.innerHTML = '';

    
    for (let i = 0; i < 60; i++) {
        linha = document.createElement('tr');
        for (let j = 0; j < 60; j++) {            
            coluna = document.createElement('td');
            coluna.innerHTML = `
                ${fase03[i][j]}
            `;
            linha.appendChild(coluna);
        };
        tela.appendChild(linha);
    };  
}


function checarEspacoVazio(direcao) {
    switch (direcao) {
        case 87:
            return fase03[coordPlayer.y - 1][coordPlayer.x] === ' ';
        case 83:
            return fase03[coordPlayer.y + 1][coordPlayer.x] === ' ';
        case 65:
            return fase03[coordPlayer.y][coordPlayer.x - 1] === ' ';
        case 68:
            return fase03[coordPlayer.y][coordPlayer.x + 1] === ' ';
    }
};

function checarEspinho(direcao) {
    switch (direcao) {
        case 87:
            return fase03[coordPlayer.y - 1][coordPlayer.x] === spikes;
        case 83:
            return fase03[coordPlayer.y + 1][coordPlayer.x] === spikes;
        case 65:
            return fase03[coordPlayer.y][coordPlayer.x - 1] === spikes;
        case 68:
            return fase03[coordPlayer.y][coordPlayer.x + 1] === spikes;
    }
}

function morteEGameOver () {
    vidas--;
    if (vidas === 0) {
        alert('FIM DE JOGO');
        window.location.href = '../pages/derrota.html';
    } else if (vidas === 2) {
        fase03[coordPlayer.y][coordPlayer.x] = ' ';
        coordPlayer.x = 2;
        coordPlayer.y = 2;
        fase03 = fase03Inicio1morte;
        carregarMapa();
    } else if(vidas === 1) {
        fase03[coordPlayer.y][coordPlayer.x] = ' ';
        coordPlayer.x = 2;
        coordPlayer.y = 2;
        fase03 = fase03Inicio2Morte;
        carregarMapa();
    }
}

function checarEspacoChave(direcao) {
    switch (direcao) {
        case 87:
            return fase03[coordPlayer.y - 1][coordPlayer.x] === key;
        case 83:
            return fase03[coordPlayer.y + 1][coordPlayer.x] === key;
        case 65:
            return fase03[coordPlayer.y][coordPlayer.x - 1] === key;
        case 68:
            return fase03[coordPlayer.y][coordPlayer.x + 1] === key;
    }
};

function checarPorta(direcao) {
    switch (direcao) {
        case 87:
            return fase03[coordPlayer.y - 1][coordPlayer.x] === unlockedDoor;
        case 83:
            return fase03[coordPlayer.y + 1][coordPlayer.x] === unlockedDoor;
        case 65:
            return fase03[coordPlayer.y][coordPlayer.x - 1] === unlockedDoor;
        case 68:
            return fase03[coordPlayer.y][coordPlayer.x + 1] === unlockedDoor;
    }
};

function checarBotao(direcao) {
    switch(direcao) {
        case 87:
            return fase03[coordPlayer.y - 1][coordPlayer.x] === button;
        case 83:
            return fase03[coordPlayer.y + 1][coordPlayer.x] === button;
        case 65:
            return fase03[coordPlayer.y][coordPlayer.x - 1] === button;
        case 68:
            return fase03[coordPlayer.y][coordPlayer.x + 1] === button;
    }
}

function checarTp(direcao) {
    switch(direcao) {
        case 87:
            return fase03[coordPlayer.y - 1][coordPlayer.x] === tp;
        case 83:
            return fase03[coordPlayer.y + 1][coordPlayer.x] === tp;
        case 65:
            return fase03[coordPlayer.y][coordPlayer.x - 1] === tp;
        case 68:
            return fase03[coordPlayer.y][coordPlayer.x + 1] === tp;
    }
}

// ################################# CHECAR CHAVES ########################################################

function estaNaChaveVermelha() {
    return coordPlayer.x === fixedCoords.redKey.x && coordPlayer.y === fixedCoords.redKey.y;
};

function estaNaChaveRoxa() {
    return coordPlayer.x === fixedCoords.purpleKey.x && coordPlayer.y === fixedCoords.purpleKey.y;
};

function estaNaChaveRosa() {
    return coordPlayer.x === fixedCoords.pinkKey.x && coordPlayer.y === fixedCoords.pinkKey.y;
};

// ################################# CHECAR BOTÕES ########################################################

function estaNoBotaoVerde() {
    return coordPlayer.x === fixedCoords.greenButton.x && coordPlayer.y === fixedCoords.greenButton.y;
};

function estaNoBotaoAzulEscuro() {
    return coordPlayer.x === fixedCoords.darkBlueButton.x && coordPlayer.y === fixedCoords.darkBlueButton.y;
};

function estaNoBotaoAzulClaro() {
    return coordPlayer.x === fixedCoords.lightBlueButton.x && coordPlayer.y === fixedCoords.lightBlueButton.y;
};

function estaNoBotaoAmarelo() {
    return coordPlayer.x === fixedCoords.yellowButton.x && coordPlayer.y === fixedCoords.yellowButton.y;
};

function estaNoBotaoLaranja() {
    return coordPlayer.x === fixedCoords.orangeButton.x && coordPlayer.y === fixedCoords.orangeButton.y;
};

// ################################# CHECAR SE ESTÁ EM CIMA DE TELEPORTES ########################################################

function estaNoTpAmareloA() {
    return coordPlayer.x === fixedCoords.tpAmareloA.x && coordPlayer.y === fixedCoords.tpAmareloA.y;
};

function estaNoTpAmareloB() {
    return coordPlayer.x === fixedCoords.tpAmareloB.x && coordPlayer.y === fixedCoords.tpAmareloB.y;
};

function estaNoTpAzulClaroA() {
    return coordPlayer.x === fixedCoords.tpAzulClaroA.x && coordPlayer.y === fixedCoords.tpAzulClaroA.y;
};

function estaNoTpAzulClaroB() {
    return coordPlayer.x === fixedCoords.tpAzulClaroB.x && coordPlayer.y === fixedCoords.tpAzulClaroB.y;
};

function estaNoTpLaranjaA() {
    return coordPlayer.x === fixedCoords.tpLaranjaA.x && coordPlayer.y === fixedCoords.tpLaranjaA.y;
};

function estaNoTpLaranjaB() {
    return coordPlayer.x === fixedCoords.tpLaranjaB.x && coordPlayer.y === fixedCoords.tpLaranjaB.y;
};

function estaNoTpVerdeA() {
    return coordPlayer.x === fixedCoords.tpVerdeA.x && coordPlayer.y === fixedCoords.tpVerdeA.y;
};

function estaNoTpVerdeB() {
    return coordPlayer.x === fixedCoords.tpVerdeB.x && coordPlayer.y === fixedCoords.tpVerdeB.y;
};

function estaNoTpRoxoA() {
    return coordPlayer.x === fixedCoords.tpRoxoA.x && coordPlayer.y === fixedCoords.tpRoxoA.y;
};

function estaNoTpRoxoB() {
    return coordPlayer.x === fixedCoords.tpRoxoB.x && coordPlayer.y === fixedCoords.tpRoxoB.y;
};

// ################################# MANTER CHAVE ########################################################

function manterChaveIrParaCima() {
    fase03[coordPlayer.y][coordPlayer.x] = key;
    fase03[coordPlayer.y - 1][coordPlayer.x] = player;
    coordPlayer.y--;
};

function manterChaveIrParaBaixo() {
    fase03[coordPlayer.y][coordPlayer.x] = key;
    fase03[coordPlayer.y + 1][coordPlayer.x] = player;
    coordPlayer.y++;
};

function manterChaveIrParaEsquerda() {
    fase03[coordPlayer.y][coordPlayer.x] = key;
    fase03[coordPlayer.y][coordPlayer.x - 1] = player;
    coordPlayer.x--;
};

function manterChaveIrParaDireita() {
    fase03[coordPlayer.y][coordPlayer.x] = key;
    fase03[coordPlayer.y][coordPlayer.x + 1] = player;
    coordPlayer.x++;
}

// ################################# MOVIMENTAÇÃO E SE ESTÁ EM PORTA ########################################################

function irParaCima() {
    fase03[coordPlayer.y][coordPlayer.x] = ' ';
    fase03[coordPlayer.y - 1][coordPlayer.x] = player;
    coordPlayer.y--;
};

function irParaBaixo() {
    fase03[coordPlayer.y][coordPlayer.x] = ' ';
    fase03[coordPlayer.y + 1][coordPlayer.x] = player;
    coordPlayer.y++;
};

function irParaEsquerda() {
    fase03[coordPlayer.y][coordPlayer.x] = ' ';
    fase03[coordPlayer.y][coordPlayer.x - 1] = player;
    coordPlayer.x--;
}

function irParaDireita() {
    fase03[coordPlayer.y][coordPlayer.x] = ' ';
    fase03[coordPlayer.y][coordPlayer.x + 1] = player;
    coordPlayer.x++;
}

function estaNumaPorta() {
    if (coordPlayer.x === fixedCoords.redDoor.x && coordPlayer.y === fixedCoords.redDoor.y) {
        return true
    } else if (coordPlayer.x === fixedCoords.purpleDoor.x && coordPlayer.y === fixedCoords.purpleDoor.y) {
        return true
    }
}

function estaNaPortaFinal() {
    return coordPlayer.x === fixedCoords.finalDoor.x && coordPlayer.y === fixedCoords.finalDoor.y;
};

// ################################# MANTER BOTÃO ########################################################

function manterBotaoIrParaCima() {
    fase03[coordPlayer.y][coordPlayer.x] = button;
    fase03[coordPlayer.y - 1][coordPlayer.x] = player;
    coordPlayer.y--;
}

function manterBotaoIrParaBaixo() {
    fase03[coordPlayer.y][coordPlayer.x] = button;
    fase03[coordPlayer.y + 1][coordPlayer.x] = player;
    coordPlayer.y++;
}

function manterBotaoIrParaEsquerda() {
    fase03[coordPlayer.y][coordPlayer.x] = button;
    fase03[coordPlayer.y][coordPlayer.x - 1] = player;
    coordPlayer.x--;
}

function manterBotaoIrParaDireita() {
    fase03[coordPlayer.y][coordPlayer.x] = button;
    fase03[coordPlayer.y][coordPlayer.x + 1] = player;
    coordPlayer.x++;
}

function manterBotaoIrParaCima() {
    fase03[coordPlayer.y][coordPlayer.x] = button;
    fase03[coordPlayer.y - 1][coordPlayer.x] = player;
    coordPlayer.y--;
}

function manterBotaoIrParaBaixo() {
    fase03[coordPlayer.y][coordPlayer.x] = button;
    fase03[coordPlayer.y + 1][coordPlayer.x] = player;
    coordPlayer.y++;
}

function manterBotaoIrParaEsquerda() {
    fase03[coordPlayer.y][coordPlayer.x] = button;
    fase03[coordPlayer.y][coordPlayer.x - 1] = player;
    coordPlayer.x--;
}

function manterBotaoIrParaDireita() {
    fase03[coordPlayer.y][coordPlayer.x] = button;
    fase03[coordPlayer.y][coordPlayer.x + 1] = player;
    coordPlayer.x++;
}

// ################################# SAIR DE TP/BOTÃO ########################################################

function sairDoBotao() {
    if (estaNoBotaoVerde() || estaNoBotaoAzulEscuro() || estaNoBotaoAzulClaro() || estaNoBotaoAmarelo() || estaNoBotaoLaranja()) {
        return true;
    }
}
function sairDoTp() {
    if (estaNoTpAmareloA() || estaNoTpAmareloB() || estaNoTpAzulClaroA() || estaNoTpAzulClaroB() || estaNoTpLaranjaA() || estaNoTpLaranjaB() || estaNoTpRoxoA() || estaNoTpRoxoB() || estaNoTpVerdeA() || estaNoTpVerdeB()) {
        return true;
    }
}

// ################################# MANTER TP ########################################################

function manterTpIrParaCima() {
    fase03[coordPlayer.y][coordPlayer.x] = tp;
    fase03[coordPlayer.y - 1][coordPlayer.x] = player;
    coordPlayer.y--;
}

function manterTpIrParaBaixo() {
    fase03[coordPlayer.y][coordPlayer.x] = tp;
    fase03[coordPlayer.y + 1][coordPlayer.x] = player;
    coordPlayer.y++;
}

function manterTpIrParaEsquerda() {
    fase03[coordPlayer.y][coordPlayer.x] = tp;
    fase03[coordPlayer.y][coordPlayer.x - 1] = player;
    coordPlayer.x--;
}

function manterTpIrParaDireita() {
    fase03[coordPlayer.y][coordPlayer.x] = tp;
    fase03[coordPlayer.y][coordPlayer.x + 1] = player;
    coordPlayer.x++;
}

// ################################# MOVIMENTAÇÃO E INTERAÇÃO ########################################################

document.addEventListener ('keydown', (controles) => {
    switch (controles.keyCode) {
            case 87: // W
                if (checarEspacoVazio(87) || checarEspacoChave(87) || checarPorta(87) || checarBotao(87) || checarTp(87)) {

                    if (estaNaChaveVermelha() && redDoor === lockedDoor) {
                        manterChaveIrParaCima();
                        carregarMapa();

                    } else if (estaNaChaveRoxa() && purpleDoor === lockedDoor) {
                        manterChaveIrParaCima();
                        carregarMapa();

                    } else if (estaNaChaveRosa() && pinkDoor === lockedDoor) {
                        manterChaveIrParaCima();
                        carregarMapa();

                    } else if (estaNoTpAmareloA()) {
                        manterTpIrParaCima();
                        carregarMapa();

                    } else if (estaNoTpAmareloB()) {
                        manterTpIrParaCima();
                        carregarMapa();

                    } else if (estaNoTpAzulClaroA()) {
                        manterTpIrParaCima();
                        carregarMapa();

                    } else if (estaNoTpAzulClaroB()) {
                        manterTpIrParaCima();
                        carregarMapa();

                    } else if (estaNoTpLaranjaA()) {
                        manterTpIrParaCima();
                        carregarMapa();

                    } else if (estaNoTpLaranjaB()) {
                        manterTpIrParaCima();
                        carregarMapa();

                    } else if (estaNoTpRoxoA()) {
                        manterTpIrParaCima();
                        carregarMapa();

                    } else if (estaNoTpRoxoB()) {
                        manterTpIrParaCima();
                        carregarMapa();

                    } else if (estaNoTpVerdeA()) {
                        manterTpIrParaCima();
                        carregarMapa();

                    } else if (estaNoTpVerdeB()) {
                        manterTpIrParaCima();
                        carregarMapa();

                    } else if (sairDoTp()) {
                        manterTpIrParaCima();
                        carregarMapa();

                    } else if (sairDoBotao()) {
                        manterBotaoIrParaCima();
                        carregarMapa();                    

                    } else if (estaNumaPorta()) {
                        manterPortaIrParaCima();
                        carregarMapa();

                    } else {
                        irParaCima();
                        carregarMapa();
                    }
                } else if (checarEspinho(87)) {
                    morteEGameOver ();
                }
                break;
            case 83: // S
                if (checarEspacoVazio(83)|| checarEspacoChave(83) || checarPorta(83) || checarBotao(83) || checarTp(83)) {

                    if (estaNaChaveVermelha() && redDoor === lockedDoor) {
                        manterChaveIrParaBaixo();
                        carregarMapa();

                    } else if (estaNaChaveRoxa() && purpleDoor === lockedDoor) {
                        manterChaveIrParaBaixo();
                        carregarMapa();

                    } else if (estaNaChaveRosa() && pinkDoor === lockedDoor) {
                        manterChaveIrParaBaixo();
                        carregarMapa();
                        
                    } else if (estaNoTpAmareloA()) {
                        manterTpIrParaBaixo();
                        carregarMapa();

                    } else if (estaNoTpAmareloB()) {
                        manterTpIrParaBaixo();
                        carregarMapa();

                    } else if (estaNoTpAzulClaroA()) {
                        manterTpIrParaBaixo();
                        carregarMapa();

                    } else if (estaNoTpAzulClaroB()) {
                        manterTpIrParaBaixo();
                        carregarMapa();

                    } else if (estaNoTpLaranjaA()) {
                        manterTpIrParaBaixo();
                        carregarMapa();

                    } else if (estaNoTpLaranjaB()) {
                        manterTpIrParaBaixo();
                        carregarMapa();

                    } else if (estaNoTpRoxoA()) {
                        manterTpIrParaBaixo();
                        carregarMapa();

                    } else if (estaNoTpRoxoB()) {
                        manterTpIrParaBaixo();
                        carregarMapa();

                    } else if (estaNoTpVerdeA()) {
                        manterTpIrParaBaixo();
                        carregarMapa();

                    } else if (estaNoTpVerdeB()) {
                        manterTpIrParaBaixo();
                        carregarMapa();

                    } else if (sairDoTp()) {
                        manterTpIrParaBaixo();
                        carregarMapa();

                    } else if (sairDoBotao()) {
                        manterBotaoIrParaBaixo();
                        carregarMapa();

                    } else if (estaNumaPorta()) {
                        manterPortaIrParaBaixo();
                        carregarMapa();

                    } else {
                        irParaBaixo();
                        carregarMapa();
                    }
                } else if (checarEspinho(83)) {
                    morteEGameOver ();
                }
                break;
            case 65: // A
                if (checarEspacoVazio(65) || checarEspacoChave(65) || checarPorta(65) || checarBotao(65) || checarTp(65)) {

                    if (estaNaChaveVermelha() && redDoor === lockedDoor) {
                        manterChaveIrParaEsquerda();
                        carregarMapa();

                    } else if (estaNaChaveRoxa() && purpleDoor === lockedDoor) {
                        manterChaveIrParaEsquerda();
                        carregarMapa();

                    } else if (estaNaChaveRosa() && pinkDoor === lockedDoor) {
                        manterChaveIrParaEsquerda();
                        carregarMapa();

                    } else if (estaNoTpAmareloA()) {
                        manterTpIrParaEsquerda();
                        carregarMapa();

                    } else if (estaNoTpAmareloB()) {
                        manterTpIrParaEsquerda();
                        carregarMapa();

                    } else if (estaNoTpAzulClaroA()) {
                        manterTpIrParaEsquerda();
                        carregarMapa();

                    } else if (estaNoTpAzulClaroB()) {
                        manterTpIrParaEsquerda();
                        carregarMapa();

                    } else if (estaNoTpLaranjaA()) {
                        manterTpIrParaEsquerda();
                        carregarMapa();

                    } else if (estaNoTpLaranjaB()) {
                        manterTpIrParaEsquerda();
                        carregarMapa();

                    } else if (estaNoTpRoxoA()) {
                        manterTpIrParaEsquerda();
                        carregarMapa();

                    } else if (estaNoTpRoxoB()) {
                        manterTpIrParaEsquerda();
                        carregarMapa();

                    } else if (estaNoTpVerdeA()) {
                        manterTpIrParaEsquerda();
                        carregarMapa();

                    } else if (estaNoTpVerdeB()) {
                        manterTpIrParaEsquerda();
                        carregarMapa();

                    } else if (sairDoTp()) {
                        manterTpIrParaEsquerda();
                        carregarMapa();

                    } else if (sairDoBotao()) {
                        manterBotaoIrParaEsquerda();
                        carregarMapa();
                    } else if (estaNumaPorta()) {
                        manterBotaoIrParaEsquerda();
                        carregarMapa();
                    } else {
                        irParaEsquerda();
                        carregarMapa();
                    }
                } else if (checarEspinho(65)) {
                    morteEGameOver ();
                }
                break;
            case 68: // D
                if (checarEspacoVazio(68) || checarEspacoChave(68) || checarPorta(68) || checarBotao(68) || checarTp(68)) {

                    if (estaNaChaveVermelha() && redDoor === lockedDoor) {
                        manterChaveIrParaDireita();
                        carregarMapa();

                    } else if (estaNaChaveRoxa() && purpleDoor === lockedDoor) {
                        manterChaveIrParaDireita();
                        carregarMapa();

                    } else if (estaNaChaveRosa() && pinkDoor === lockedDoor) {
                        manterChaveIrParaDireita();
                        carregarMapa();

                    } else if (estaNoTpAmareloA()) {
                        manterTpIrParaDireita();
                        carregarMapa();

                    } else if (estaNoTpAmareloB()) {
                        manterTpIrParaDireita();
                        carregarMapa();

                    } else if (estaNoTpAzulClaroA()) {
                        manterTpIrParaDireita();
                        carregarMapa();

                    } else if (estaNoTpAzulClaroB()) {
                        manterTpIrParaDireita();
                        carregarMapa();

                    } else if (estaNoTpLaranjaA()) {
                        manterTpIrParaDireita();
                        carregarMapa();

                    } else if (estaNoTpLaranjaB()) {
                        manterTpIrParaDireita();
                        carregarMapa();

                    } else if (estaNoTpRoxoA()) {
                        manterTpIrParaDireita();
                        carregarMapa();

                    } else if (estaNoTpRoxoB()) {
                        manterTpIrParaDireita();
                        carregarMapa();

                    } else if (estaNoTpVerdeA()) {
                        manterTpIrParaDireita();
                        carregarMapa();

                    } else if (estaNoTpVerdeB()) {
                        manterTpIrParaDireita();
                        carregarMapa();

                    } else if (sairDoTp()) {
                        manterTpIrParaDireita();
                        carregarMapa();

                    } else if (sairDoBotao()) {
                        manterBotaoIrParaDireita();
                        carregarMapa();
                    } else if (estaNumaPorta()) {
                        manterPortaIrParaDireita();
                        carregarMapa();
                    } else {
                        irParaDireita();
                        carregarMapa();
                    }
                } else if (checarEspinho(68)) {
                    morteEGameOver ();
                }
                break;
            case 73: // I
                if(estaNaChaveVermelha()) {
                    redDoor = unlockedDoor;
                    fase03[fixedCoords.redDoor.y][fixedCoords.redDoor.x] = redDoor;
                    carregarMapa();
                }
                if(estaNaChaveRosa()) {
                    finalDoor = unlockedDoor;
                    fase03[fixedCoords.finalDoor.y][fixedCoords.finalDoor.x] = finalDoor;
                    carregarMapa();
                }
                if(estaNaChaveRoxa()) {
                    purpleDoor = unlockedDoor;
                    fase03[fixedCoords.purpleDoor.y][fixedCoords.purpleDoor.x] = purpleDoor;
                    carregarMapa();
                }                    
                               
                if(estaNoBotaoAmarelo()) {
                    for (let j = 14; j <= 25; j++) {
                        if (j == 14 || j == 15) {
                            fase03[3][j] = spikes;
                            
                        } else if (j === 16) {
                            fase03[5][j] = spikes;
                            fase03[6][j] = spikes;
                        }
                        if (j === 20) {
                            fase03[4][j] = spikes;
                            fase03[5][j] = spikes;
                        } 
                        if (j === 23 || j === 24 || j === 25) {
                            fase03[12][j] = ' ';
                        }
                        carregarMapa();
                    }   
                }
                if(estaNoBotaoAzulClaro()) {
                    for (let j = 17; j < 29; j++) {
                        if (j >= 18 && j < 20) {
                            fase03[10][j] = spikes;
                            if (j === 19) {
                            fase03[11][j] = spikes;
                            }
                        } else if (j === 22) {
                            fase03[13][j] = ' ';
                            fase03[14][j] = ' ';
                            fase03[15][j] = ' ';
                        }
                        if (j === 25) {
                            for (let i = 23; i <= 27; i++) {
                                fase03[i][25] = spikes;
                            }
                        } 
                        if (j === 26) {
                            fase03[23][j] = spikes;
                            fase03[27][j] = spikes;
                        }
                        if (j === 27 || j === 28) {
                            fase03[25][j] = spikes;
                        }
                    }                    
                    carregarMapa();
                }
                if(estaNoBotaoAzulEscuro()) {
                    for (let i = 22; i <= 28; i++) {
                        if (i === 22) {
                            fase03[i][13] = spikes;
                            fase03[i][19] = spikes;
                        } else if (i === 23 || i === 24) {
                            fase03[i][3] = spikes;
                            fase03[i][13] = spikes;
                        } else if (i === 25) {
                            fase03[i][3] = spikes;
                            fase03[i][13] = spikes;
                            fase03[i][18] = spikes;
                        } else if (i === 26 || i === 28) {
                            fase03[i][9] = spikes;
                            fase03[i][11] = ' ';
                        } else if (i === 27) {
                            fase03[i][9] = spikes;
                            fase03[i][11] = spikes;
                        }
                    }
                    carregarMapa();
                }   
                if(estaNoBotaoLaranja()) {
                    fase03[4][26] = ' ';
                    fase03[5][26] = ' ';
                    carregarMapa();
                }
                if(estaNoBotaoVerde()) {
                    for (let j = 5; j <= 11; j++) {
                        if (j <= 8) {
                            fase03[7][j] = spikes;
                        } else {
                            fase03[7][j] = ' ';
                            fase03[13][j] = spikes;
                        }
                    }
                    for (let i = 10; i <= 13; i++) {
                        fase03[i][8] = spikes;
                    }
                    carregarMapa();
                }    
                
                if (estaNaPortaFinal()) {
                    alert('proxima fase')
                    window.location.href = '../pages/fase03.html';
                }
    };
});

document.addEventListener("DOMContentLoaded", mapa);
document.addEventListener("DOMContentLoaded", carregarMapa);