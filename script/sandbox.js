

let moveCount = 0;

// let xOrOh = getTurn();

let boardState = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let xArray = [];

let oArray = [];

let winningCombos =  [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [0,4,8], [2,5,8], [6,4,2]]



function Square(mark, move, tile) {
    this.mark = mark;
    this.move = move;
    this.tile = tile;
}

function getTurn() {
    if (moveCount % 2 !== 0) {
        return 'O';
    } else {
        return 'X';
    }
}

function makeTag(tag,  id, clas, parent) {
    let newEl = document.createElement(tag);
    newEl.setAttribute('class', clas);
    newEl.setAttribute('id', id);
    document.getElementById(parent).appendChild(newEl);
}

function drawboard() {
    makeTag('div', 'mainContainer', 'container', 'app');
    let colCount = -2;
    for (r = 1; r <= 3; r++) {
        colCount += 2;
        makeTag('div', `row${r}`, 'row', 'mainContainer');
        for (c = colCount; c <= c+2; c++) {
            makeTag('div', `col${c}`, 'col', 'mainContainer');
        }
    }

// function drawBoard();


function handleClick() {
    let newMove = new Square(getTurn(), moveCount, boardState[moveCount]);

    if (moveCount % 2 !== 0) {
        // oArray.push(newMove);
        oArray.push(newMove.tile);
    } else {
        // xArray.push(newMove);
        xArray.push(newMove.tile);
    }
    moveCount++;
}

function compareArrays(winNums, array) {
    return winNums.every(elem => array.includes(elem));
}

function checkWinCondition() {
        // let i = 0;
        winningCombos.forEach((item) => {
            if (compareArrays(item, xArray)) {
                console.log('X has 3 in a row!')
            }
            if (compareArrays(item, oArray)) {
                console.log('O has 3 in a row!')
            }
        })
}}
    // let i = 0;
//     winningCombos.forEach((combo[i]) => {
//         console.log(combo[i])
//     })
// }



//         i++;
//         if (i === 3) {
//             i = 0;
//         }
//     })
// }
    

