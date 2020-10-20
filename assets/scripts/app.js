'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  // your JS code goes here
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-form').on('submit', authEvents.onSignOut)

  $('#new-game-form').on('submit', gameEvents.onStartPlaying)
  $('#game-board-form').on('submit', gameEvents.onGameBoard)

  // $('#change-password-form').hide()
  // $('#sign-out-form').hide()
  // $('#sign-in-form').hide()
  // $('#new-game-form').hide()
  // $('#game-board-form').hide()
})
