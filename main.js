let gridBoard = document.querySelector('.gridBoard');
gridBoard.style.backgroundColor = 'white';

function populateGridBoard(size) {
    
    gridBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    gridBoard.style.backgroundColor = 'white';

    let totalGridSquares = size * size;

    reset();

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
        if (colourBtn.textContent !== 'random') {
            colourChange = colourBtn.textContent    
            return;
        }
        if (colourBtn.textContent === 'random') {
            const randomColorPen = () => {
                const randomColor = Math.floor(Math.random() * 16777215).toString(16);
                return `#${randomColor}`
            } 
            colourChange = randomColorPen();
        }
    })
})

//allows to reset board
let resetBtn = document.querySelector('.reset')

function reset() {
    let selectGridSquares = gridBoard.querySelectorAll('.box');
    selectGridSquares.forEach((div) => div.remove());
}
resetBtn.addEventListener('click', reset)



//allows to change board size
let gridSize;

const submitBtn = document.querySelector('.submit');
let input = document.querySelector('input')

submitBtn.addEventListener('click', () => {
    gridSize = input.value;
    console.log(gridSize)
    populateGridBoard(gridSize);
})


// let gridSize = submitBtn.addEventListener('click', inputSize);
// populateGridBoard(gridSize);

