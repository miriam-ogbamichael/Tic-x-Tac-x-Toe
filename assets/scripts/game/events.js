
// const getFormFields = require('./../../../lib/get-form-fields')

const ui = require('./ui')
const api = require('./api')
const logic = require('./logic')

const store = require('../store')

// const onGameBoard = function (event) {
//   event.preventDefault()
//
//   const form = event.target
//   // gets form from the event
//   const data = getFormFields(form)
//   // sends sata to the api
//   api.gameBoard(data)
//     .then(ui.gameBoardSuccess)
//     // responseoble for successful responses
//     .catch(ui.gameBoardFailure)
//     // responseible for failed attempts
// }

const onStartPlaying = function (event) {
  event.preventDefault()
  // console.log('On Start Playing')
  // prevents page form refreshing
  api.startPlaying()
    .then(ui.startPlayingSuccess)
  // responseoble for successful responses
    .catch(ui.startPlayingFailure)
  // responseible for failed attempts
}
const addHandlers = () => {
  $('#new-game-button').on('click', onStartPlaying)
  // console.log('new-game-button when onStartPlaying is clicked ran, Data :', onStartPlaying)
  // $('#game-board-form').on('submit', onGameBoard)
  $('#onUpdateGameBoard').on('submit', onUpdateGameBoard)
  $('.box').on('click', onGameBoardClick)
  // console.log('board was clicked', onGameBoardClick)

  // $('#new-game-form').hide()
  // $('#game-board-form').hide()
}

const onUpdateGameBoard = function (event) {
  event.preventDefault()

  api.updateGameBoard()
    .then(ui.updateGameBoardSuccess)
  console.log(onUpdateGameBoard)
    .catch(ui.updateGameBoardFailure)
}

const onGameBoardClick = function (event) {
  // console.log('in onGameBoardClick')
  // console.log(event)
  // event.preventDefault()
  // put x or o in the square
  if (store.gameOver) {
    ui.gameOver()
  } else if ($(event.target).text() !== '') {
    ui.positionTaken()
  } else {
    // update store.board with X or O
    const index = $(event.target).data('id')
    // console.log(event.target)
    // event.target refers to the EXACT HTML element (.box) we clicked on
    $(event.target).text(store.currentPlayer)
    console.log(index)
    // store whichever player clicked the board as the current player
    store.board[index] = store.currentPlayer
    console.log(store.board)
    // check if a winner has been declared after player has clicked board
    logic.checkForWinner()
    // switch to the next player's turn
    logic.switchPlayer()
  }
}

module.exports = {
  addHandlers
  // onGameBoard,
  // // onStartPlaying,
  // onUpdateGameBoard,
  // onGameBoardClick
}
