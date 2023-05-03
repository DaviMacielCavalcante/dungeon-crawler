let fase01 = [];
const player = '&', lockedDoor = 'D', unlockedDoor = '=', key = '@';
let coordPlayer = {
    x: 1,
    y: 1,
};
let coordKey = {
    x: 2,
    y: 12,
}
let coordDoor = {
    x: 14,
    y: 1,
}

function mapa() {
    for (let i = 0; i < 15; i++) {
        fase01[i] = new Array(15);
    };
        
    for (let i = 0; i < 15; i++) {
        for(let j = 0; j < 15; j++) {
            switch (i) {
                case 1:
                    if (j === 0) {
                        fase01[i][j] = '*';
                    } else if (j === 1) {
                        fase01[i][j] = player;
                    } else if (j === 14) {
                        fase01[i][j] = lockedDoor;
                    } else {
                        fase01[i][j] = ' ';
                    }
                    break;
                case 2:
                    if (j === 0 || j === 14) {
                        fase01[i][j] = '*';
                    } else {
                        fase01[i][j] = ' ';
                    }
                    break;
                case 3:
                    if (j >= 11 && j <= 13) {
                        fase01[i][j] = ' ';
                    } else {
                        fase01[i][j] = '*';
                    }
                    break;
                case 4:
                    if (j === 0 || j === 14) {
                        fase01[i][j] = '*';
                    } else {
                        fase01[i][j] = ' ';
                    }
                break;
                case 5:
                    if (j === 0 || j === 14) {
                        fase01[i][j] = '*';
                    } else {
                        fase01[i][j] = ' ';
                    }
                    break;
                case 6:
                    if (j >= 1 && j <= 3) {
                        fase01[i][j] = ' '
                    } else {
                        fase01[i][j] = '*'
                    }
                    break;
                case 7:
                    if (j === 0 || j === 14) {
                        fase01[i][j] = '*'
                    } else {
                        fase01[i][j] = ' '
                    }
                    break;
                case 8:
                    if (j === 0 || j === 14) {
                        fase01[i][j] = '*';
                    } else {
                        fase01[i][j] = ' ';
                    }
                    break;
                    break;
                case 9:
                    if (j >= 11 && j <= 13) {
                        fase01[i][j] = ' ';
                    } else {
                        fase01[i][j] = '*';
                    }
                    break;
                case 10:
                    if (j === 0 || j === 4 || j === 8 || j === 14) {
                        fase01[i][j] = '*'
                    } else {
                        fase01[i][j] = ' '
                    }
                    break;
                case 11:
                    if (j === 0 || j === 4 || j === 6 || j === 8 || j === 10 || j === 14) {
                        fase01[i][j] = '*'
                    } else {
                        fase01[i][j] = ' '
                    }
                    break;
                case 12:
                    if (j === 0 || j === 4 || j === 6 || j === 8 || j === 10 || j === 14) {
                        fase01[i][j] = '*'
                    } else if (j === 2) {
                        fase01[i][j] = key;
                    } else {
                        fase01[i][j] = ' '
                    }
                    break;
                case 13:
                    if (j === 0 || j === 6 || j === 10 || j === 14) {
                        fase01[i][j] = '*'
                    } else {
                        fase01[i][j] = ' '
                    }
                    break;
                default: fase01[i][j] = "*"
                    break;
            }
        }
    }; 
}

function carregarMapa() {
    mapa();
    const tela = document.querySelector('#tela-jogo');
    let linha = [];
    let coluna;

    for (let i = 0; i < 15; i++) {
        linha = document.createElement('tr');
        for (let j = 0; j < 15; j++) {            
            coluna = document.createElement('td');
            coluna.innerHTML = `
                ${fase01[i][j]}
            `;
            linha.appendChild(coluna);
        };
        tela.appendChild(linha);
    };    
};

document.addEventListener("DOMContentLoaded", carregarMapa);