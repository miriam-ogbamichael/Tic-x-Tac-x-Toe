// requires store file to be used in this file
const store = require('../store')

// requires ui file to be used in this file
const ui = require('./ui')

// functionality for switching between 'X' and 'O' for currentPlayer
const switchPlayer = function () {
  // store the fact that the game started with 'X'
  if (store.currentPlayer === 'X') {
    // After 'X' goes, store the fact that it's now 'Os' turn
    store.currentPlayer = 'O'
    // after 'O' goes, store the fact it went, and make the next turn be 'X' now
  } else {
    store.currentPlayer = 'X'
  }
}

// reset board functionality
const resetBoard = function () {
  // store the fact that the game started with 'X'
  store.currentPlayer = 'X'
  // store the fact that the game board array is full
  store.board.fill('')
  // store the fact that when the game is over and
  store.gameOver = false
  $('.box').text('')
}

// the functionality for all the possible conditions to a winner
const checkForWinner = function () {
  const winner =

    // TOP HORIZONTAL WINNER CONDITION
    (store.board[0] === store.board[1] && store.board[1] === store.board[2] && store.board[0] !== '') ||
    // MIDDLE HORIZONTAL WINNER CONDITION
    (store.board[3] === store.board[4] && store.board[4] === store.board[5] && store.board[4] !== '') ||
    // BOTTOM HORIZONTAL WINNER CONDITION
    (store.board[6] === store.board[7] && store.board[7] === store.board[8] && store.board[7] !== '') ||

    // DIAGONAL WINNER CONDITION STARTING FROM TOP LEFT SQUARE
    (store.board[0] === store.board[4] && store.board[4] === store.board[8] && store.board[0] !== '') ||
    // DIAGONAL WINNER CONDITION STARTING FROM TOP RIGHT SQUARE
    (store.board[2] === store.board[4] && store.board[4] === store.board[6] && store.board[2] !== '') ||

    // LEFT VERTICAL WINNER CONDITION
    (store.board[0] === store.board[3] && store.board[3] === store.board[6] && store.board[0] !== '') ||
    // MIDDLE VERTICAL WINNER CONDITION
    (store.board[1] === store.board[4] && store.board[4] === store.board[7] && store.board[1] !== '') ||
    // RIGHT VERTICAL WINNER CONDITION
    (store.board[2] === store.board[5] && store.board[5] === store.board[8] && store.board[2] !== '')

  // tie condition functionality
  const tie = store.board.every(position => {
    return position !== ''
  })

  // if a winner is determined, show the message that the ui has stored for the winning condition
  if (winner) {
    ui.winner()
  // if a tie is determined, show the message that the ui has stored for the tie condition
  } else if (tie) {
    ui.tie()
  }
}

// export functions to be used in other files
module.exports = {
  switchPlayer,
  checkForWinner,
  resetBoard
}
