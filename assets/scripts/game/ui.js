const store = require('./../store')

const newGameSuccess = function (response) {
  $('#message').text('Successfully started a new game! ' + response.user.token)
  store.user = response.user
  $('#new-game-form').show()
  $('#game-board-form').show()
}

const newGameFailure = function () {
  $('#message').text('Oops, there is an error with starting a new game.')
}

const gameBoardSuccess = function () {
  $('#message').text('Successfully pulled up the game board!')
  $('#game-board-form').show()
  $('#new-game-form').hide()
  $('#change-password-form').hide()
  $('#sign-out-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#new-game-form').hide()
}

const gameBoardFailure = function () {
  $('#message').text('Oops, there is a an error with the game board')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  gameBoardSuccess,
  gameBoardFailure
}
