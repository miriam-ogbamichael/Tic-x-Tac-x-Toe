
const config = require('./../config')
const store = require('./../store')

const newGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/new-game',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'POST',
    data: ''
  })
}

module.exports = {
  newGame
}
