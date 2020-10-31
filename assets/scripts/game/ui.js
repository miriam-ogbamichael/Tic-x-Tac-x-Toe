
const store = require('./../store')

const startPlayingSuccess = function (data) {
  $('#message').text('Successfully started a new game!')
  $('#change-password-form').hide()
  $('#new-game-form').show()
  $('#game-board-form').show()
  $('.box').text('')
  console.log('startPlayingSuccess ran. Data is ', data)
}

const startPlayingFailure = function (error) {
  $('#message').text('Oops, there is an error with starting a new game.')
  console.error('startPlayingFailure ran. Error is :', error)
}

// const gameBoardSuccess = function () {
//   $('#message').text('Successfully pulled up the game board!')
//   $('#game-board-form').show()
//   $('#new-game-form').hide()
// }
//
// const gameBoardFailure = function () {
//   $('#message').text('Oops, there is a an error with the game board.')
// }

const onUpdateGameBoardSuccess = function () {
  $('#message').text('Succeffully updated the game board!')
}

const onUpdateGameBoardFailure = function () {
  $('#message').text('Oops, there is a an error updating the game board.')
}

const positionTaken = function () {
  $('#message').text('Oops, this position is already taken. Try another one.').show()

  setTimeout(function () {
    $('#message').hide()
  }, 3000)
}

const gameOver = function () {
  $('#message').text('Womp womp womp, this game is over. - Click \'Start Playing\' to play another game').show()

  setTimeout(function () {
    $('#message').hide()
  }, 3000)
}

const winner = function () {
  store.gameOver = true
  console.log('winner is established', winner)

  $('#message').text(`${store.currentPlayer} Won! Well, this round anyway... - Click 'Start Playing' to play another game`).show()

  setTimeout(function () {
    $('#message').hide()
  }, 3000)
}

const tie = function (msg) {
  store.gameOver = true

  $('#message').text('Wow! Looks like this round is a tie! Click \'Start Playing\' to see who wins the next round').show()

  setTimeout(function () {
    $('#message').hide()
  }, 3000)
}

module.exports = {
  startPlayingSuccess,
  startPlayingFailure,
  // gameBoardSuccess,
  // gameBoardFailure,
  onUpdateGameBoardSuccess,
  onUpdateGameBoardFailure,
  positionTaken,
  gameOver,
  winner,
  tie
}
