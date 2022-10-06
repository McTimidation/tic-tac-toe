

let moveCount = 0;

// let xOrOh = getTurn();

let boardState = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let xArray = [];

let oArray = [];

let winningCombos =  [['box0','box1','box2'], ['box3','box4','box5'], ['box6','box7','box8'], ['box0','box3','box6'], ['box1','box4','box7'], ['box0','box4','box8'], ['box2','box5','box8'], ['box6','box4','box2']]



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
    let colCount = -3;
    for (r = 1; r <= 3; r++) {
        colCount += 3;
        makeTag('div', `row${r}`, 'row', 'mainContainer');
        for (c = colCount; c <= colCount + 2; c++) {
            makeTag('button', `box${c}`, 'col', `row${r}`);
        }
    }
}
// function drawBoard();


// function handleClick() {


    // let newMove = new Square(getTurn(), moveCount, boardState[moveCount]);

    // if (moveCount % 2 !== 0) {
    //     // oArray.push(newMove);
    //     oArray.push(newMove.tile);
    // } else {
    //     // xArray.push(newMove);
    //     xArray.push(newMove.tile);
    // }
    // moveCount++;

makeTag('h1', 'title', 'header', 'app');
document.getElementById('title').textContent = "Tic-Tac-Toe"


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
}

const onClick = (event) => {
    
    let clickID = event.target.id;
    let newMove = new Square(getTurn(), moveCount, boardState[moveCount]);

    if (moveCount % 2 !== 0) {
        // oArray.push(newMove);
        oArray.push(clickID);
        document.getElementById(clickID).textContent = 'O'
    } else {
        // xArray.push(newMove);
        xArray.push(clickID);
        document.getElementById(clickID).textContent = 'X'
    }
    moveCount++;
}


window.addEventListener('click', onClick);

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
    

drawboard();
