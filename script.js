const resetButton = document.querySelector(".reset-button");
const gridSizeButton = document.querySelector(".grid-size-button");
const gridSquareContainer = document.querySelector(".grid-square-container");
const divGridSquare = [];

gridSizeButton.addEventListener('click', () => {
    let size = prompt("Enter a grid size from 8-100");
    if (size < 8 || size > 100) {
        alert("Please choose a number between 8 and 100");
    }
    else {
        createGrid(size);
    }
})

resetButton.addEventListener('click', () => {
    divGridSquare.forEach(sq => {
        sq.style.backgroundColor = "#ffffff"
        sq.style.opacity = "0";
    })
})

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
    gridSquareContainer.innerHTML = '';

    const boardSize = 960 / size;
    const gridSize = size * size;

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < gridSize; i++) {
        divGridSquare[i] = document.createElement("div");
        divGridSquare[i].classList.add("div-grid-square");
        divGridSquare[i].style.width = `${boardSize}px`;
        divGridSquare[i].style.height = `${boardSize}px`;
        divGridSquare[i].style.opacity = "0";
        divGridSquare[i].style.backgroundColor = getRandomColor();
        fragment.appendChild(divGridSquare[i]);

    }

    gridSquareContainer.appendChild(fragment);

    divGridSquare.forEach(square => {
        square.addEventListener('mouseover', () => {
            let currentOpacity = parseFloat(square.style.opacity);

            if (currentOpacity < 1) {
                square.style.opacity = (currentOpacity + 0.1).toString();
            }
        })
    });
}

createGrid(16);