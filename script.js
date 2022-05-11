let grid = document.querySelectorAll('.box');
let firstTurn = true;

grid.forEach((box) =>{    
    box.addEventListener('click', () => {
        console.log('clicked');
        console.log(box.classList);
        if (firstTurn === true){
            box.classList.add('blue');
            box.classList.remove('red');
            firstTurn = false;
        } else if (firstTurn === false){
            box.classList.add('red');
            box.classList.remove('blue');
            firstTurn = true;
        } else {
        }
    })
})