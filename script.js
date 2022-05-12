let grid = document.querySelectorAll('.box');
let restartButton = document.querySelector('button');
let playerTurn = document.querySelector('h3');
let turn = 1;
let boardArray = [
    '','','',
    '','','',
    '','',''
]


restartButton.addEventListener('click', () => {
    grid.forEach((box) =>{
        box.classList.remove('blue', 'red');
        turn = 1;
        playerTurn.innerText = "Turn: Player 1";
        boardArray = [
            '','','',
            '','','',
            '','',''
        ]
        startGame();
        
    })
})

startGame();

function startGame () {grid.forEach((box) =>{
    box.addEventListener('click', function colorChange() {
        if (turn % 2 === 0){
            box.classList.add('red');
            box.classList.remove('blue');
            turn++;
            box.removeEventListener('click', colorChange);
            playerTurn.innerText = "Turn: Player 1";
            boardArray[this.id] = 'o';

        } else if (turn % 2 !== 0){
            box.classList.add('blue');
            box.classList.remove('red');
            turn++;
            box.removeEventListener('click', colorChange);
            playerTurn.innerText = "Turn: Player 2";
            boardArray[this.id] = 'x';

        } else {
        }
    })
})
}
