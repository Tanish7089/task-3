// Define players and initial state
let currentPlayer = 'X';
let moves = 0;
let gameActive = true;
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Cell elements
const cells = document.querySelectorAll('.cell');

// Status display
const statusDisplay = document.getElementById('status');

// Handle a player's move
function handleMove(cellIndex) {
    const cell = cells[cellIndex];

    // Check if cell is already played or game is over
    if (cell.textContent !== '' || !gameActive) {
        return;
    }

    // Update cell content and current player
    cell.textContent = currentPlayer;
    moves++;

    // Check for a win or draw
    if (checkWin()) {
        statusDisplay.textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
    } else if (moves === 9) {
        statusDisplay.textContent = 'It\'s a draw!';
        gameActive = false;
    } else {
        // Switch turns
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
    }
}

// Check if there's a winner
function checkWin() {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return cells[index].textContent === currentPlayer;
        });
    });
}

// Reset the game
function resetGame() {
    currentPlayer = 'X';
    moves = 0;
    gameActive = true;
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;

    // Clear all cell content
    cells.forEach(cell => {
        cell.textContent = '';
    });
}
