let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');
let turn0 = true;
let count = 0;
let gameOver = false;

function checkWin() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (let condition of winConditions) {
        let [a, b, c] = condition;
        if (boxes[a].innerText !== '' && 
            boxes[a].innerText === boxes[b].innerText && 
            boxes[b].innerText === boxes[c].innerText) {
            alert(`Player ${boxes[a].innerText} Wins!`);
            gameOver = true;
            return;
        }
    }
}

function resetGame() {
    boxes.forEach((box) => {
        box.innerText = '';
    });
    turn0 = true;
    count = 0;
    gameOver = false;
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (gameOver || box.innerText !== '') return;

        if (turn0){
            box.innerText = 'O';
            turn0 = false;
        }
        else{
            box.innerText = 'X';
            turn0 = true;
        }
        checkWin();
    })
})

resetBtn.addEventListener('click', resetGame);