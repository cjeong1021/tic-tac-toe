let grid = document.querySelectorAll('.box');
let restartButton = document.querySelector('button');
let playerTurn = document.querySelector('h3');
let playerOneTurn = true;
let turn = 0;
let boardArray = [
    '0','1','2',
    '3','4','5',
    '6','7','8'
]


restartButton.addEventListener('click', () => {
    grid.forEach((box) =>{
        box.style.backgroundColor = 'black';
        playerOneTurn = true;
        playerTurn.innerText = "Turn: Player 1";
        boardArray = [
            '0','1','2',
            '3','4','5',
            '6','7','8'
        ]
        turn = 0;
        gameStart()
    })
})

gameStart()

function gameStart() {
    grid.forEach((box) => {
    box.addEventListener('click', colorChange)
})}

function colorChange(e) {
    if (playerOneTurn){
        e.target.style.backgroundColor = 'red';
        playerOneTurn = false;
        playerTurn.innerText = "Turn: Player 2";
        boardArray[e.target.id] = 'o';
        console.log(boardArray);
        turn++;
        checkWin(boardArray);
    } else {
        e.target.style.backgroundColor = 'blue';
        playerOneTurn = true;
        playerTurn.innerText = "Turn: Player 1";
        boardArray[e.target.id] = 'x';
        console.log(boardArray);
        turn++;
        checkWin(boardArray);
    }
    e.target.removeEventListener('click', colorChange);
}

function checkWin(array) {
    if ((array[0] === array[1] && array[1] === array[2]) ||
        (array[3] === array[4] && array[4] === array[5]) ||
        (array[6] === array[7] && array[7] === array[8]) ||
        (array[0] === array[3] && array[3] === array[6]) ||
        (array[1] === array[4] && array[4] === array[7]) ||
        (array[2] === array[5] && array[5] === array[8]) ||
        (array[0] === array[4] && array[4] === array[8]) ||
        (array[2] === array[4] && array[4] === array[6])) {
            if (playerOneTurn) {
                alert("Player Two Wins")
                grid.forEach((box) => {
                    box.removeEventListener('click', colorChange);
                })
            } else {
                alert("player One Wins")
                grid.forEach((box) => {
                    box.removeEventListener('click', colorChange);
                })
            }
        } else if (turn === 9) {
            alert('Tie');
    }
}
