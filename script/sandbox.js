

let moveCount = 0;

// let xOrOh = getTurn();

let boardState = [];

let xArray = [];

let oArray = [];

let winningCombos =  []




function Square(mark, move, tile) {
    this.mark = mark;
    this.move = move;
    this.tile = tile;
    
}
// this.x = x;
// this.y = y;
// , x, y

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
    let colCount = -7;
    for (r = 1; r <= 7; r++) {
        colCount += 7;
        makeTag('div', `row${r}`, 'row', 'mainContainer');
        for (c = colCount; c <= colCount + 6; c++) {
            makeTag('button', `${c}`, 'col', `row${r}`);
            // let newMove = new Square(getTurn(), moveCount, c);
            // console.log(newMove.tile);
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
document.getElementById('title').textContent = "Connect 4? More like Connect Bore"


function compareArrays(winNums, array) {
    return winNums.every(elem => array.includes(elem));
}

function leftDownDiagonal(event) {
        let combo = [];
        for (i = 0; i <= 3; i++) {
        combo.push(event);
        event += 6;
    } winningCombos.push(combo);
}

function leftUpDiag(event) {
    let combo = [];
        for (i = 0; i <= 3; i++) {
        combo.push(event);
        event -= 8;
        } winningCombos.push(combo);
}

function RightUpDiagonal(event) {
    let combo = [];
        for (i = 0; i <= 3; i++) {
        combo.push(event);
        event -= 6;
        } winningCombos.push(combo);
    }

function rightDownDiag(event) {
    let combo = [];
        for (i = 0; i <= 3; i++) {
        combo.push(event);
        event += 8;
        } winningCombos.push(combo);
}

function makeUpCombo(event) {
    let combo = [];
        for (i = 0; i <= 3; i++) {
        combo.push(event);
        event -= 7;
        } winningCombos.push(combo);
}

function makeDownCombo(event) {
    let combo = [];
        for (i = 0; i <= 3; i++) {
        combo.push(event);
        event += 7;
        } winningCombos.push(combo);
}

function leftCombo(event) {
    let combo = [];
        for (i = 0; i <= 3; i++) {
        combo.push(event);
        event -= 6;
        } winningCombos.push(combo);
}



// function checkWinCondition() {
        // let i = 0;
//         winningCombos.forEach((item) => {
//             if (compareArrays(item, xArray)) {
//                 makeTag('h2','endMessage', '', 'title');
//                 document.getElementById('endMessage').textContent = 'X wins!';
//                 makeTag('button', 'reset', '', 'endMessage');
//                 document.getElementById('reset').textContent = 'Play Again';
//                 document.getElementById('reset').addEventListener('click', resetGame);
//             }
//             if (compareArrays(item, oArray)) {
//                 makeTag('h2','endMessage', '', 'title');
//                 document.getElementById('endMessage').textContent = 'O wins!';
//                 makeTag('button', 'reset', '', 'endMessage');
//                 document.getElementById('reset').textContent = 'Play Again';
//                 document.getElementById('reset').addEventListener('click', resetGame);
            // } else if (moveCount === 9) {
            //     makeTag('h2','endMessage', '', 'title');
            //     document.getElementById('endMessage').textContent = "It's a tie!";
            //     makeTag('button', 'reset', '', 'endMessage');
            //     document.getElementById('reset').textContent = 'Play Again';
            //     document.getElementById('reset').addEventListener('click', resetGame);
            // }
//         })
// }

const onClick = (event) => {
    
    let clickID = event.target.id;
    let boxID = document.getElementById(clickID)
    // let rect = document.getElementById(clickID).getBoundingClientRect();, rect.x, rect.y
    console.log(moveCount);
    if (0 <= clickID <= 6) {
        clickID += 42;
    } else if (7 <= clickID <= 13) {
        clickID += 35;
    } else if (14 <= clickID <= 20) {
        clickID += 28;
    } else if (21 <= clickID <= 27) {
        clickID += 21;
    } else if (28 <= clickID <= 34) {
        clickID += 14;
    } 
    

    if (clickID === 'reset') {
        resetGame();
    }


    

    if (moveCount % 2 !== 0 && boxID.textContent === '') {
        // oArray.push(newMove);
        oArray.push(clickID);
        boxID.textContent = 'O';
        moveCount++;
    } else if (boxID.textContent === '') {
        // xArray.push(newMove);
        xArray.push(clickID);
        document.getElementById(clickID).textContent = 'X';
        moveCount++;
    } console.log(clickID);
    // checkWinCondition();
}

function resetGame() {
    xArray = [];
    oArray = [];
    for (i = 0; i <= 8; i++) {
        document.getElementById(`box${i}`).textContent = '';
    }
    document.getElementById('reset').remove();
    document.getElementById('endMessage').remove();
    moveCount = 0;
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
