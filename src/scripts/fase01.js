let fase01 = [];

for (let i = 0; i < 17; i++) 
{
    fase01[i] = new Array(17);
};

for (let i = 0; i < 17; i++) 
{
    for(let j = 0; j < 17; j++)
    {
        switch (i) {
            case 1:
                if (j === 0 || j === 16) {
                    fase01[i][j] = '*'
                } else {
                    fase01[i][j] = ' '
                }
            break;
            case 2:
                if (j === 0) {
                    fase01[i][j] = '*'
                } else if (j === 2) {
                    fase01[i][j] = '&'
                } else if (j === 16) {
                    fase01[i][j] = 'D'
                } else {
                    fase01[i][j] = ' '
                }
            break;
            case 3:
                if (j === 0 || j === 16) {
                    fase01[i][j] = '*'
                } else {
                    fase01[i][j] = ' '
                }
            break;
            case 4:
                if (j >= 11 && j <= 15) {
                    fase01[i][j] = ' '
                } else {
                    fase01[i][j] = '*'
                }
            break;
            case 5:
                if (j === 0 || j === 16) {
                    fase01[i][j] = '*'
                } else {
                    fase01[i][j] = ' '
                }
            break;
            case 6:
                if (j === 0 || j === 16) {
                    fase01[i][j] = '*'
                } else {
                    fase01[i][j] = ' '
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
                    fase01[i][j] = '@'
                } else {
                    fase01[i][j] = ' '
                }
            break;
            case 15:
                if (j === 0 || j === 7 || j === 16) {
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

console.log(fase01);