const store = require('./../store')

const startPlayingSuccess = function (response) {
  $('#message').text('Successfully started a new game! ' + response.user.token)
  store.user = response.user
  // $('#new-game-form').hide()
  // $('#game-board-form').show()
}

const startPlayingFailure = function () {
  $('#message').text('Oops, there is an error with starting a new game.')
}

const gameBoardSuccess = function () {
  $('#message').text('Successfully pulled up the game board!')
  // $('#game-board-form').show()
  // $('#new-game-form').hide()
}

const gameBoardFailure = function () {
  $('#message').text('Oops, there is a an error with the game board')
}

module.exports = {
  startPlayingSuccess,
  startPlayingFailure,
  gameBoardSuccess,
  gameBoardFailure
}
