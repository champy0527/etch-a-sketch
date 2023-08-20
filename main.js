let gridBoard = document.querySelector('.gridBoard');

function populateGridBoard(size) {
    
    gridBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    gridBoard.style.backgroundColor = 'white';

    let totalGridSquares = size * size;

    for (let i=0; i<totalGridSquares; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('box')

        
        gridBoard.insertAdjacentElement('beforeend', gridSquare);
        
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.backgroundColor = `${colourChange}`
        })
    }
}

//allows change of colour
let colourChange;
let colourBtns = document.querySelectorAll('.colourBtn');
colourBtns.forEach((colourBtn) => {
    colourBtn.addEventListener('click', () => {
        colourChange = colourBtn.textContent
    })
})



// populateGridBoard(2);
let input = document.querySelector('input')
let gridSize = input.value;
populateGridBoard(gridSize);

//allows to reset board
let resetBtn = document.querySelector('.reset')

function reset() {
    let selectGridSquares = gridBoard.querySelectorAll('.box');
    selectGridSquares.forEach((div) => div.remove());
}
resetBtn.addEventListener('click', reset)

// let selectGridSquares = gridBoard.querySelector('div');
// selectGridSquares.forEach((div) => div.remove());