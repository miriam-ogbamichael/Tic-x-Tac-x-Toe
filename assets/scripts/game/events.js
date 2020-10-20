
const getFormFields = require('./../../../lib/get-form-fields')

const ui = require('./ui')
const api = require('./api')

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

module.exports = {
  onGameBoard
}
