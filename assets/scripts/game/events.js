
const getFormFields = require('./../../../lib/get-form-fields')

const ui = require('./ui')
const api = require('./api')
const logic = require('./logic')

const store = require('../store')

const onGameBoard = function (event) {
  event.preventDefault()

  const form = event.target
  // gets form from the event
  const data = getFormFields(form)
  // sends sata to the api
  api.gameBoard(data)
    .then(ui.gameBoardSuccess)
    // responseoble for successful responses
    .catch(ui.gameBoardFailure)
    // responseible for failed attempts
}

const onStartPlaying = function (event) {
  event.preventDefault()
  console.log('On Start Playing')
  // prevents page form refreshing
  api.startPlaying()
    .then(ui.startPlayingSuccess)
  // responseoble for successful responses
    .catch(ui.startPlayingFailure)
  // responseible for failed attempts
}

const onUpdateGameBoard = function (event) {
  event.preventDefault()

  api.updateGameBoard()
    .then(ui.updateGameBoardSuccess)
  console.log(onUpdateGameBoard)
    .catch(ui.updateGameBoardFailure)
}

const onGameBoardClick = function (event) {
  console.log('in onGameBoardClick')
  console.log(event)
  console.log(event.target)
  event.preventDefault()

  if ($(event.target).text() !== '') {
  } else {
    // put x or o in the square
    // event.target refers to the EXACT HTML element (.box) we clicked on
    $(event.target).text(store.currentPlayer)

    //update store.board with X or O
    const index = $(event.target).data('id')

    logic.checkForWinner()
    // actually switch the current player
    logic.switchPlayer()
  }
}

module.exports = {
  onGameBoard,
  onStartPlaying,
  onUpdateGameBoard,
  onGameBoardClick
}
