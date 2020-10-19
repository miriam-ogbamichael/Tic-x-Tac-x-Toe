
const ui = require('./ui')
const api = require('./api')

const onNewGame = function (event) {
  event.preventDefault()
  // const form = event.target
  // const data = getFormFields(form)
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onGameBoard = function (event) {
  event.preventDefault()

  api.gameBoard()
    .then(ui.gameBoardSuccess)
    .catch(ui.gameBoardFailure)
}

module.exports = {
  onNewGame,
  onGameBoard
}
