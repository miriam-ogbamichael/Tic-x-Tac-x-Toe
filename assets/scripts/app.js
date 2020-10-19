'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./auth/events')

$(() => {
  // your JS code goes here
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#sign-out-form').on('submit', events.onSignOut)

  $('#new-game-form').on('submit', events.onNewGame)
  $('#game-board-form').on('submit', events.onGameBoard)

  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#sign-in-form').hide()
  $('#new-game-form').hide()
  $('#game-board-form').hide()
})
