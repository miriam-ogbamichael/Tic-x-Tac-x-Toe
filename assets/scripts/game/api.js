
const config = require('./../config')
const store = require('./../store')

const startPlaying = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST',
    data: {}
  })
}

const getGameBoard = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET',
    data: data
  })
}

const updateGameBoard = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: data.index,
          value: data.player
        },
        over: data.over
      }
    }
  })
}

module.exports = {
  startPlaying,
  getGameBoard,
  updateGameBoard
}
