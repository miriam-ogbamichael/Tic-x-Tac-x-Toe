// requires config file to be used in this file
const config = require('./../config')

// requires store file to be used in this file
const store = require('./../store')

// POST ajax request for creating a new game using
const startPlaying = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST',
    data: ''
  })
}

// GET ajax request for
const userGameStats = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET',
    data: {}
  })
}

// PATCH ajax request for updating game board duirng games
const updateGameBoard = function (index, value, gameOver) {
  return $.ajax({
    url: config.apiUrl + `/games/${store.game._id}`,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: gameOver
      }
    }
  })
}

// exports all fucntions used in this file so that they can be used in other files
module.exports = {
  startPlaying,
  userGameStats,
  updateGameBoard
}
