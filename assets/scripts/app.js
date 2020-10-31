'use strict'

// used require without a reference to ensure that the authentication and game files are bundled respectively
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  // Puts all the authentication event handlers into one function so I call the function instead of every event handler I would need
  authEvents.addHandlers()
  // Puts all the game event handlers into one function so I call the function instead of every event handler I would need
  gameEvents.addHandlers()
})
