// requires ui file to be used in this file
const store = require('./../store')

// Gives the user a message indicating that they've started playing the game successfully
const startPlayingSuccess = function (data) {
  $('#message').text('Successfully started a new game!').show()

  // stores the game's data
  store.game = data.game

  // stores that the game is over
  store.gameOver = false

  // sets up game board array
  store.board = ['', '', '',
    '', '', '',
    '', '', '']

  // sets current player to always have X to start the game
  store.currentPlayer = 'X'

  $('#change-password-form').show()
  $('#new-game-form').show()

  $('#game-board-form').show()
  $('.box').text('')

  // times how long the message shows on the browser, makes it go away after 7000 milliseconds
  setTimeout(function () {
    $('#message').hide()
  }, 7000)
}

// Gives the user a message indicating that an error has occured with the 'Start Playing' function
const startPlayingFailure = function () {
  $('#message').text('Oops, there is an error with starting a new game.').show()

  // times how long the message shows on the browser, makes it go away after 7000 milliseconds
  setTimeout(function () {
    $('#message').hide()
  }, 7000)
}

// Gives the user a message indicating that they've updated the game successfully
const onUpdateGameBoardSuccess = function () {
  $('#message').text('Succeffully updated the game board!').show()

  // times how long the message shows on the browser, makes it go away after 7000 milliseconds
  setTimeout(function () {
    $('#message').hide()
  }, 7000)
}

// Gives the user a message indicating that an error has occured with update game board function
const onUpdateGameBoardFailure = function () {
  $('#message').text('Oops, there is a an error updating the game board.').show()

  // times how long the message shows on the browser, makes it go away after 7000 milliseconds
  setTimeout(function () {
    $('#message').hide()
  }, 7000)
}

// Gives the user a message indicating that they've selected a position that has already been chosen.
const positionTaken = function () {
  $('#message').text('Oops, this position is already taken. Try another one.').show()

  // times how long the message shows on the browser, makes it go away after 7000 milliseconds
  setTimeout(function () {
    $('#message').hide()
  }, 7000)
}

// Gives the user a message indicating that the game is over and the board is no longer clickable, to play another game they'd need to click the 'Start Playing' button
const gameOver = function () {
  $('#message').text('Womp womp womp, this game is over. Play another round by clicking \'Start Playing\'').show()

  // times how long the message shows on the browser, makes it go away after 7000 milliseconds
  setTimeout(function () {
    $('#message').hide()
  }, 7000)
}

// Gives the user a message indicating that a player has won (Telling them which player) and that the game is over and the board is no longer clickable, to play another game they'd need to click the 'Start Playing' button
const winner = function () {
  store.gameOver = true

  $('#message').text(`${store.currentPlayer} Won! Well, this round anyway... play another round by clicking 'Start Playing'`).show()

  // times how long the message shows on the browser, makes it go away after 7000 milliseconds
  setTimeout(function () {
    $('#message').hide()
  }, 7000)
}

// Gives the user a message indicating that a tie has occured and that the game is over and the board is no longer clickable, to play another game they'd need to click the 'Start Playing' button
const tie = function (msg) {
  store.gameOver = true

  // messgae that shows on browser when a tie scenario occurs
  $('#message').text('Wow! Looks like this round is a tie! Play another round by clicking \'Start Playing\'').show()

  // times how long the message shows on the browser, makes it go away after 7000 milliseconds
  setTimeout(function () {
    $('#message').hide()
  }, 7000)
}

const userGameStatsSuccess = function (response) {
  $('#message').text('You have played ' + response.games.length + ' games so far!').show()
  $('#user-game-stats-form').show()

  setTimeout(function () {
    $('#message').hide()
  }, 7000)
}

const userGameStatsFailure = function () {
  $('#message').text('Oops, there is a an error with pulling up your game stats.').show()
}

// exports all fucntions used in this file so that they can be used in other files
module.exports = {
  startPlayingSuccess,
  startPlayingFailure,
  userGameStatsSuccess,
  userGameStatsFailure,
  onUpdateGameBoardSuccess,
  onUpdateGameBoardFailure,
  positionTaken,
  gameOver,
  winner,
  tie
}
