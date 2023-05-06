let fase02 = [];
let redDoor, purpleDoor, pinkDoor, fakeWall;
const player = '&', spikes = '#', key = '@';
const redKey = key, purpleKey = key, pinkKey = key;
const  greenButton = 'O', darkBlueButton = 'O', lightBlueButton = 'O', yellowButton = 'O', orangeButton = 'O';
let coordPlayer = {x: 2, y: 2,};
const fixedCoords = {
    finalDoor: {x: 29, y: 14},
    redKey: {x: 10, y: 12},
    purpleKey: {x: 20, y: 27},
    pinkKey: {x: 28, y: 11},
    greenButton: {x: 2, y: 14},
    darkBlueButton: {x: 5, y: 20},
    lightBlueButton: {x: 15, y: 14},
    yellowButton: {x: 28, y: 17},
    orangeButton: {x: 21, y: 1}
};
for (let i = 0; i < 30; i++) {
    fase02[i] = new Array(30);
};
    
for (let i = 0; i < 30; i++) {
    for(let j = 0; j < 30; j++) {
        switch (i) {
            case 1:
                if (j === 0 || j === 12 || j === 22 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else if (j === fixedCoords.orangeButton.x) {
                    fase02[i][j] = orangeButton;
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 2:
                if (j === 0 || j === 12 || j === 22 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else if (j === coordPlayer.x) {
                    fase02[i][j] = player;
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 3: 
                if (j === 0 || j === 12 || j >= 16 && j <= 22 || j >= 26 && j <= 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 4:
                if (j >= 0 && j <= 8 || j === 12 || j === 26 || j === 29 ) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 5:
                if (j === 0 || j === 12 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 6:
                if (j === 0 || j === 12 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 7:
                if (j === 0 || j >= 4 && j <= 22 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 8:
                if (j === 0 || j === 4 || j === 12 || j === 22 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 9:
                if (j === 0 || j === 4 || j === 12 || j === 22 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 10:
                if (j === 0 || j === 4 || j === 12 || j === 22 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 11:
                if (j === 0 || j === 4 || j >= 12 && j <= 14 || j >= 16 && j <= 18 || j === 22 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else if (j === 15) {
                    purpleDoor = 'D';
                    fase02[i][j] = purpleDoor;
                } else if (j === fixedCoords.pinkKey.x) {
                    fase02[i][j] = pinkKey;
                } else if (j === fixedCoords.redKey.x) {
                    fase02[i][j] = redKey;
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 12:
                if (j === 0 || j === 4 || j === 12 || j === 18 || j >= 22 && j <= 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 13:
                if (j === 0 || j === 4 || j === 12 || j === 18 || j === 22 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 14:
                if (j === 0 || j === 4 || j === 12 || j === 18 || j === 22) {
                    fase02[i][j] = '*';
                } else if (j === fixedCoords.greenButton.x) {
                    fase02[i][j] = greenButton;
                } else if (j === fixedCoords.lightBlueButton.x) {
                    fase02[i][j] = lightBlueButton;
                } else if (j === fixedCoords.finalDoor.x) {
                    pinkDoor = 'D';
                    fase02[i][j] = pinkDoor;
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 15:
                if (j === 0 || j === 4 || j === 12 || j === 18 || j === 22 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 16:
                if (j >= 0 && j <= 8 || j >= 10 && j <= 18 || j === 22 || j >= 26 && j <= 29) {
                    fase02[i][j] = '*';
                } else if (j === 9) {
                    redDoor = 'D';
                    fase02[i][j] = redDoor;
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 17:
                if (j === 0 || j === 7 || j === 11 || j === 22 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else if (j === fixedCoords.yellowButton.x) {
                    fase02[i][j] = yellowButton;
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 18:
                if (j === 0 || j === 7 || j === 11 || j === 22 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 19:
                if (j === 0 || j === 3 || j === 7 || j === 11 || j >= 15 && j <= 22 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 20:
                if (j === 0 || j === 3 || j === 7 || j === 11 || j === 22 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else if (j === fixedCoords.darkBlueButton.x) {
                    fase02[i][j] = darkBlueButton;
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 21:
                if (j === 0 || j === 3 || j === 7 || j === 11 || j === 22 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 22:
                if (j === 0 || j >= 3 && j <= 7 || j === 11 || j >= 15 && j <= 19 || j === 22 || j === 26 || j === 29 ) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 23:
                if (j === 0 || j === 11 || j === 15 || j === 22 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
            case 24:
                if (j === 0 || j === 11 || j === 15 || j === 22 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 25:
                if (j === 0 || j === 11 || j === 15 || j >= 18 && j <= 22 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 26:
                if (j === 0 || j === 11 || j === 15 || j === 22 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 27:
                if (j === 0 || j === 11 || j === 15 || j === 22 || j === 29) {
                    fase02[i][j] = '*';
                } else if (j === fixedCoords.purpleKey.x) {
                    fase02[i][j] =  purpleKey;
                } else {
                    fase02[i][j] = ' ';
                }
                break;
                break;
            case 28:
                if (j === 0 || j === 11 || j === 15 || j === 22 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            default:
                fase02[i][j] = '*';
                break;
        }
    } 
};    
console.log(fase02);

function checarEspacoVazio(direcao) {
    switch (direcao) {
        case 87:
            return fase02[coordPlayer.y - 1][coordPlayer.x] === ' ';
        case 83:
            return fase02[coordPlayer.y + 1][coordPlayer.x] === ' ';
        case 65:
            return fase02[coordPlayer.y][coordPlayer.x - 1] === ' ';
        case 68:
            return fase02[coordPlayer.y][coordPlayer.x + 1] === ' ';
    }
};

function checarEspacoChave(direcao) {
    switch (direcao) {
        case 87:
            return fase02[coordPlayer.y - 1][coordPlayer.x] === key;
        case 83:
            return fase02[coordPlayer.y + 1][coordPlayer.x] === key;
        case 65:
            return fase02[coordPlayer.y][coordPlayer.x - 1] === key;
        case 68:
            return fase02[coordPlayer.y][coordPlayer.x + 1] === key;
    }
};

function checarPorta(direcao) {
    switch (direcao) {
        case 87:
            return fase02[coordPlayer.y - 1][coordPlayer.x] === unlockedDoor;
        case 83:
            return fase02[coordPlayer.y + 1][coordPlayer.x] === unlockedDoor;
        case 65:
            return fase02[coordPlayer.y][coordPlayer.x - 1] === unlockedDoor;
        case 68:
            return fase02[coordPlayer.y][coordPlayer.x + 1] === unlockedDoor;
    }
};

function estaNaChaveEPortaTrancada() {
    return coordPlayer.x === coordKey.x && coordPlayer.y === coordKey.y && fase02[coordDoor.y][coordDoor.x] === lockedDoor;
};

function estaNaChaveVermelha() {
    return coordPlayer.x === fixedCoords.redKey.x && coordPlayer.y === fixedCoords.redKey.y;
};

function estaNaChaveRoxa() {
    return coordPlayer.x === fixedCoords.purpleKey.x && coordPlayer.y === fixedCoords.purpleKey.y;
};

function estaNaChaveRosa() {
    return coordPlayer.x === fixedCoords.pinkKey.x && coordPlayer.y === fixedCoords.pinkKey.y;
};

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

function estaNaPortaFinal() {
    return coordPlayer.x === coordDoor.x && coordPlayer.y === coordDoor.y;
};

document.addEventListener ('keydown', (controles) => {
    switch (controles.keyCode) {
            case 87: // W
                if (checarEspacoVazio(87) || checarEspacoChave(87) || checarPorta(87)) {

                    if (coordPlayer.x === coordKey.x && coordPlayer.y === coordKey.y && fase02[coordDoor.y][coordDoor.x] === lockedDoor) {
                        fase02[coordPlayer.y][coordPlayer.x] = key;
                        fase02[coordPlayer.y - 1][coordPlayer.x] = player;
                        coordPlayer.y--;
                        console.log(fase02);

                    } else {
                        fase02[coordPlayer.y][coordPlayer.x] = ' ';
                        fase02[coordPlayer.y - 1][coordPlayer.x] = player;
                        coordPlayer.y--;
                        console.log(coordPlayer.y)
                        console.log(fase02);

                    }
                }
                break;
            case 83: // S
                if (checarEspacoVazio(83)|| checarEspacoChave(83) || checarPorta(83)) {

                    if (coordPlayer.x === coordKey.x && coordPlayer.y === coordKey.y && fase02[coordDoor.y][coordDoor.x] === lockedDoor) {
                        fase02[coordPlayer.y][coordPlayer.x] = key;
                        fase02[coordPlayer.y + 1][coordPlayer.x] = player;
                        coordPlayer.y++;
                        console.log(fase02);

                    } else {
                    fase02[coordPlayer.y][coordPlayer.x] = ' ';
                    fase02[coordPlayer.y + 1][coordPlayer.x] = player;
                    coordPlayer.y++;
                    console.log(fase02);

                    }
                }
                break;
            case 65: // A
                if (checarEspacoVazio(65) || checarEspacoChave(65) || checarPorta(65)) {

                    if (coordPlayer.x === coordKey.x && coordPlayer.y === coordKey.y && fase02[coordDoor.y][coordDoor.x] === lockedDoor) {
                        fase02[coordPlayer.y][coordPlayer.x] = key;
                        fase02[coordPlayer.y][coordPlayer.x - 1] = player;
                        coordPlayer.x--;
                        console.log(fase02);

                    } else {
                    fase02[coordPlayer.y][coordPlayer.x] = ' ';
                    fase02[coordPlayer.y][coordPlayer.x - 1] = player;
                    coordPlayer.x--;
                    console.log(fase02);

                    }
                }
                break;
            case 68: // D
                if (checarEspacoVazio(68) || checarEspacoChave(68) || checarPorta(68)) {

                    if (coordPlayer.x === coordKey.x && coordPlayer.y === coordKey.y && fase02[coordDoor.y][coordDoor.x] === lockedDoor) {
                        fase02[coordPlayer.y][coordPlayer.x] = key;
                        fase02[coordPlayer.y][coordPlayer.x + 1] = player;
                        coordPlayer.x++;
                        console.log(fase02);

                    } else {
                    fase02[coordPlayer.y][coordPlayer.x] = ' ';
                    fase02[coordPlayer.y][coordPlayer.x + 1] = player;
                    coordPlayer.x++;
                    console.log(fase02);

                    }
                }
                break;
            case 73: // I
                if (estaNaChaveRosa() || estaNaChaveRoxa() || estaNaChaveVermelha()) {
                    if(estaNaChaveVermelha()) {
                        redDoor = '='
                        fase02[fixedCoords.redDoor.y][fixedCoords.redDoor.x] = redDoor;
                    }
                    if(estaNaChaveRosa()) {
                        pinkDoor = '='
                        fase02[fixedCoords.pinkDoor.y][fixedCoords.pinkDoor.x] = pinkDoor;
                    }
                    if(estaNaChaveRoxa()) {
                        purpleDoor = '='
                        fase02[fixedCoords.pinkDoor.y][fixedCoords.pinkDoor.x] = purpleDoor;
                    }                    
                    console.log(fase02)
                }
                if (estaNoBotaoAmarelo() || estaNoBotaoAzulClaro() || estaNoBotaoAzulEscuro() || estaNoBotaoLaranja() || estaNoBotaoVerde()) {
                    if(estaNoBotaoAmarelo()) {
                        
                    }
                    if(estaNoBotaoAzulClaro()) {
                        
                    }
                    if(estaNoBotaoAzulEscuro()) {
                        
                    }   
                    if(estaNoBotaoLaranja()) {
                        
                    }
                    if(estaNoBotaoVerde()) {
                        
                    }                 
                    console.log(fase02)
                }
                if (estaNaPortaFinal()) {
                    console.log('proxima fase')
                }
    };
});