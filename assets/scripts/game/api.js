
const config = require('./../config')
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

// // GET ajax request for
// const getGameBoard = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/games',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//     method: 'GET',
//     data: data
//   })
// }

// PATCH ajax request for updating game board duirng games
const updateGameBoard = function (index, value, over) {
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
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
        over: over
      }
    }
  })
}

module.exports = {
  startPlaying,
  // getGameBoard,
  updateGameBoard
}
