
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

const gameBoard = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET',
    data: data
  })
}

module.exports = {
  startPlaying,
  gameBoard
}
