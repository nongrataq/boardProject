const board = document.querySelector('#board')
const SQUARES_NUMBER = 12

for (let i = 0; 1 < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    board.append(square)
}