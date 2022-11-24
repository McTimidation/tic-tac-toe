

let moveCount = 0;

// let xOrOh = getTurn();

let boardState = [];

let xArray = [];

let oArray = [];

let winningCombos =  [['box0','box1','box2'], ['box3','box4','box5'], ['box6','box7','box8'], ['box0','box3','box6'], ['box1','box4','box7'], ['box0','box4','box8'], ['box2','box5','box8'], ['box6','box4','box2']]



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
                makeTag('h2','endMessage', '', 'title');
                document.getElementById('endMessage').textContent = 'X wins!';
                makeTag('button', 'reset', '', 'endMessage');
                document.getElementById('reset').textContent = 'Play Again';
                document.getElementById('reset').addEventListener('click', resetGame);
                return
            }
            if (compareArrays(item, oArray)) {
                makeTag('h2','endMessage', '', 'title');
                document.getElementById('endMessage').textContent = 'O wins!';
                makeTag('button', 'reset', '', 'endMessage');
                document.getElementById('reset').textContent = 'Play Again';
                document.getElementById('reset').addEventListener('click', resetGame);
                return
            }  
            
        })
        if (moveCount === 9 && !document.getElementById('endMessage')) {
                makeTag('h2','endMessage', '', 'title');
                document.getElementById('endMessage').textContent = "It's a tie!";
                makeTag('button', 'reset', '', 'endMessage');
                document.getElementById('reset').textContent = 'Play Again';
                document.getElementById('reset').addEventListener('click', resetGame)
        }
}

const onClick = (event) => {
    
    let clickID = event.target.id;
    let boxID = document.getElementById(clickID)
    // let rect = document.getElementById(clickID).getBoundingClientRect();, rect.x, rect.y
    // let newMove = new Square(getTurn(), moveCount, boardState[moveCount]);
    console.log(moveCount);

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
    checkWinCondition();
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
