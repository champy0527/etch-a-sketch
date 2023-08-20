let size = document.querySelector('input');
const submitBtn = document.querySelector('.submit')
let gridBoard = document.querySelector('.gridBoard');

let colourBtns = document.querySelectorAll('.colourBtns');

// function colourGridSquare(colourBtns) {
//     colourBtns.forEach(colourBtn => {
//         colourBtn.addEventListener('click', () => {
//             colourSquare = colourBtn.textContent;
//         })
//     })
// }


submitBtn.addEventListener('click', submitValue);

function submitValue() {
    return size.value
}



let indicatedSize = submitValue();

console.log(indicatedSize)

function populateGridBoard(size) {
    
    gridBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let gridSquares = gridBoard.querySelectorAll('div');
    gridSquares.forEach((div) => div.remove())
    
    let totalGridSquares = size ** 2;

    for (let i=0; i < totalGridSquares; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.style.backgroundColor = 'white';
        gridBoard.insertAdjacentElement('beforeend', gridSquare);
        
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.backgroundColor = 'lightgrey';
        })
    }
}

function reset() {
    while (gridBoard.firstChild) {
        gridBoard.removeChild(gridBoard.lastChild);
    }
    populateGridBoard(size)
}

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', reset)

populateGridBoard(indicatedSize)

function changeGridSize(size) {
    if (size >=2 && size <= 100) {
        populateGridBoard(size)
    } else {
        console.log('Error')
    }
}

// changeGridSize(size);