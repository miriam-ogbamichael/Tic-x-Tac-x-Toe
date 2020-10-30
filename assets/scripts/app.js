'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  // your JS code goes here
  authEvents.addHandlers()

  $('#new-game-form').on('submit', gameEvents.onStartPlaying)
  $('#game-board-form').on('submit', gameEvents.onGameBoard)
  $('#onUpdateGameBoard').on('submit', gameEvents.onUpdateGameBoard)
  $('.board').on('click', gameEvents.onGameBoardClick)

  // $('#change-password-form').hide()
  // $('#sign-out-form').hide()
  // $('#sign-in-form').hide()
  // $('#new-game-form').hide()
  // $('#game-board-form').hide()
})
