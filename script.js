let grid = document.querySelectorAll('.box');
let restartButton = document.querySelector('button');
let turn = 1;

grid.forEach((box) =>{   
    let boxClick = false;
    box.addEventListener('click', () => {
        if (turn % 2 === 0 && boxClick === false){
            box.classList.add('red');
            box.classList.remove('blue');
            turn++;
            boxClick = true;
        } else if (turn % 2 !== 0 && boxClick === false){
            box.classList.add('blue');
            box.classList.remove('red');
            turn++;
            boxClick = true;
        } else {
        }
    })
})