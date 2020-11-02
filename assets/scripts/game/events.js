
// const getFormFields = require('./../../../lib/get-form-fields')

// requires ui file to be used in this file
const ui = require('./ui')

// requires api file to be used in this file
const api = require('./api')

// requires logic file to be used in this file
const logic = require('./logic')

// requires store file to be used in this file
const store = require('../store')

const onStartPlaying = function (event) {
  event.preventDefault()
  // prevents page form refreshing
  api.startPlaying()
    .then(ui.startPlayingSuccess)
  // responseoble for successful responses
    .catch(ui.startPlayingFailure)
  // responseible for failed attempts
}

const onGameBoardClick = function (event) {
  // event.preventDefault()
  // put x or o in the square
  if (store.gameOver) {
    ui.gameOver()
  } else if ($(event.target).text() !== '') {
    ui.positionTaken()
  } else {
    // update store.board with X or O
    const index = event.target.id
    // const index = $(event.target).data('id')
    // event.target refers to the EXACT HTML element (.box) we clicked on
    $(event.target).text(store.currentPlayer)
    // store whichever player clicked the board as the current player
    store.board[index] = store.currentPlayer
    // check if a winner has been declared after player has clicked board
    logic.checkForWinner()

    api.updateGameBoard(index, store.currentPlayer, store.gameOver)
      .then(ui.updateGameBoardSuccess)
      .catch(ui.updateGameBoardFailure)

    // switch to the next player's turn
    logic.switchPlayer()
  }
}

const userGameStats = function () {
  event.preventDefault()
  // sends sata to the api
  api.userGameStats()
    .then(ui.userGameStatsSuccess)
    // responseoble for successful responses
    .catch(ui.userGameStatsFailure)
    // responseible for failed attempts
  // store.game = length.store.gameOver
}

// uses all the .on functions in this addHandlers function
const addHandlers = () => {
  $('#new-game-button').on('click', onStartPlaying)
  $('.box').on('click', onGameBoardClick)
  $('#user-game-stats-form').on('click', userGameStats)
  $('#user-game-stats-form').hide()
  $('#new-game-form').hide()
  $('#game-board-form').hide()
}

// exports all fucntions used in this file so that they can be used in other files
module.exports = {
  onStartPlaying,
  onGameBoardClick,
  userGameStats,
  addHandlers
}
