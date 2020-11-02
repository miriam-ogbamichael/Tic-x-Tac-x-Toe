'use strict'

const store = {
  // keeping track of all of game board actions
  board: ['', '', '',
    '', '', '',
    '', '', ''],
  // keeping track of the current player
  currentPlayer: 'X',
  // keeping track of whether the game is over or not
  gameOver: false,
  count: 0,
  truecount: 0,
  gameStats: 0
}

module.exports = store
