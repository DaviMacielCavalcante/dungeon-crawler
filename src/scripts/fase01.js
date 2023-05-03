let fase01 = [];
const player = '&', lockedDoor = 'D', unlockedDoor = '=', key = '@';
let coordPlayer = {
    x: 2,
    y: 15,
};
let coordKey = {
    x: 2,
    y: 14,
}
let coordDoor = {
    x: 16,
    y: 2,
}

function gerarMapa() {
    for (let i = 0; i < 17; i++) {
        fase01[i] = new Array(17);
    };

    for (let i = 0; i < 17; i++) {
        for(let j = 0; j < 17; j++) {
            switch (i) {
                case 1:
                    if (j === 0 || j === 16) {
                        fase01[i][j] = '*';
                    } else {
                        fase01[i][j] = ' ';
                    }
                break;
                case 2:
                    if (j === 0) {
                        fase01[i][j] = '*';
                    } else if (j === 2) {
                        fase01[i][j] = ' ';
                    } else if (j === 16) {
                        fase01[i][j] = lockedDoor;
                    } else {
                        fase01[i][j] = ' ';
                    }
                    break;
                case 3:
                    if (j === 0 || j === 16) {
                        fase01[i][j] = '*';
                    } else {
                        fase01[i][j] = ' ';
                    }
                    break;
                case 4:
                    if (j >= 11 && j <= 15) {
                        fase01[i][j] = ' ';
                    } else {
                        fase01[i][j] = '*';
                    }
                break;
                case 5:
                    if (j === 0 || j === 16) {
                        fase01[i][j] = '*';
                    } else {
                        fase01[i][j] = ' ';
                    }
                    break;
                case 6:
                    if (j === 0 || j === 16) {
                        fase01[i][j] = '*';
                    } else {
                        fase01[i][j] = ' ';
                    }
                    break;
                case 7:
                    if (j === 0 || j === 16) {
                        fase01[i][j] = '*'
                    } else {
                        fase01[i][j] = ' '
                    }
                    break;
                case 8:
                    if (j >= 1 && j <= 5) {
                        fase01[i][j] = ' '
                    } else {
                        fase01[i][j] = '*'
                    }
                    break;
                case 9:
                    if (j === 0 || j === 16) {
                        fase01[i][j] = '*'
                    } else {
                        fase01[i][j] = ' '
                    }
                    break;
                case 10:
                    if (j === 0 || j === 16) {
                        fase01[i][j] = '*'
                    } else {
                        fase01[i][j] = ' '
                    }
                    break;
                case 11:
                    if (j === 0 || j === 16) {
                        fase01[i][j] = '*'
                    } else {
                        fase01[i][j] = ' '
                    }
                    break;
                case 12:
                    if (j >= 11 && j <= 15) {
                        fase01[i][j] = ' '
                    } else {
                        fase01[i][j] = '*'
                    }
                    break;
                case 13:
                    if (j === 0 || j === 4 || j === 10 || j === 16) {
                        fase01[i][j] = '*'
                    } else {
                        fase01[i][j] = ' '
                    }
                    break;
                case 14:
                    if (j === 0 || j === 4 || j === 7 || j === 10 || j === 16) {
                        fase01[i][j] = '*'
                    } else if (j === 2) {
                        fase01[i][j] = key
                    } else {
                        fase01[i][j] = ' '
                    }
                 break;
                case 15:
                    if (j === 0 || j === 7 || j === 16) {
                        fase01[i][j] = '*'
                    } else if(j === 2) {
                        fase01[i][j] = player
                    } else {
                        fase01[i][j] = ' '
                    }
                    break;
                default: fase01[i][j] = "*"
                    break;
            }
        }
    };    
};    

function atualizarMapa() {
    console.log(fase01);
};

function checarEspacoVazio() {
    return fase01[coordPlayer.y - 1][coordPlayer.x] === ' ' || 
            fase01[coordPlayer.y + 1][coordPlayer.x] === ' ' ||
            fase01[coordPlayer.y][coordPlayer.x - 1] === ' ' ||
            fase01[coordPlayer.y][coordPlayer.x + 1] === ' ';
};

function checarEspacoChave() {
    return fase01[coordPlayer.y - 1][coordPlayer.x] === key || 
            fase01[coordPlayer.y + 1][coordPlayer.x] === key ||
            fase01[coordPlayer.y][coordPlayer.x - 1] === key ||
            fase01[coordPlayer.y][coordPlayer.x + 1] === key;
};

function checarPorta() {
    return fase01[coordPlayer.y - 1][coordPlayer.x] === unlockedDoor || 
            fase01[coordPlayer.y + 1][coordPlayer.x] === unlockedDoor ||
            fase01[coordPlayer.y][coordPlayer.x - 1] === unlockedDoor ||
            fase01[coordPlayer.y][coordPlayer.x + 1] === unlockedDoor;
};

function estaNaChaveEPortaTrancada() {
    return coordPlayer.x === coordKey.x && coordPlayer.y === coordKey.y && fase01[coordDoor.y][coordDoor.x] === lockedDoor;
};

function acimaDaChave() {
    return coordPlayer.x === coordKey.x && coordPlayer.y === coordKey.y;
};

function acimaDaPortaDestrancada() {
    return coordPlayer.x === coordDoor.x && coordPlayer.y === coordDoor.y;
};

console.log(gerarMapa());

document.addEventListener ('keydown', (controles) => {
    switch (controles.keyCode) {
            case 87: // W
                if (checarEspacoVazio() || checarEspacoChave() || checarPorta()) {

                    if (estaNaChaveEPortaTrancada()) {
                        fase01[coordPlayer.y][coordPlayer.x] = key;
                        fase01[coordPlayer.y - 1][coordPlayer.x] = player;
                        coordPlayer.y--;
                        atualizarMapa();
                    } else {
                        fase01[coordPlayer.y][coordPlayer.x] = ' ';
                        fase01[coordPlayer.y - 1][coordPlayer.x] = player;
                        coordPlayer.y--;
                        console.log(coordPlayer.y)
                        atualizarMapa();
                    }
                }
                break;
            case 83: // S
                if (checarEspacoVazio()|| checarEspacoChave() || checarPorta()) {

                    if (estaNaChaveEPortaTrancada()) {
                        fase01[coordPlayer.y][coordPlayer.x] = key;
                        fase01[coordPlayer.y + 1][coordPlayer.x] = player;
                        coordPlayer.y++;
                        atualizarMapa();

                    } else {
                        fase01[coordPlayer.y][coordPlayer.x] = ' ';
                        fase01[coordPlayer.y + 1][coordPlayer.x] = player;
                        coordPlayer.y++;
                        atualizarMapa();
                    }
                }
                break;
            case 65: // A
                if (checarEspacoVazio() || checarEspacoChave() || checarPorta()) {

                    if (estaNaChaveEPortaTrancada()) {
                        fase01[coordPlayer.y][coordPlayer.x] = key;
                        fase01[coordPlayer.y][coordPlayer.x - 1] = player;
                        coordPlayer.x--;
                        atualizarMapa();
                    } else {
                        fase01[coordPlayer.y][coordPlayer.x] = ' ';
                        fase01[coordPlayer.y][coordPlayer.x - 1] = player;
                        coordPlayer.x--;
                        atualizarMapa();                    }
                }
                break;
            case 68: // D
                if (checarEspacoVazio() || checarEspacoChave() || checarPorta()) {

                    if (estaNaChaveEPortaTrancada()) {
                        fase01[coordPlayer.y][coordPlayer.x] = key;
                        fase01[coordPlayer.y][coordPlayer.x + 1] = player;
                        coordPlayer.x++;
                        atualizarMapa();
                    } else {
                        fase01[coordPlayer.y][coordPlayer.x] = ' ';
                        fase01[coordPlayer.y][coordPlayer.x + 1] = player;
                        coordPlayer.x++;
                        atualizarMapa();
                    }
                }
                break;
            case 73: // I
                if (acimaDaChave()) {
                    fase01[coordDoor.y][coordDoor.x] = unlockedDoor;
                    atualizarMapa();                }
                if (acimaDaPortaDestrancada()) {
                    console.log('proxima fase')
                }
    };
});