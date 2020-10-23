
const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('You have sign up successfully! ' + response.user.email)
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#sign-up-form').hide()
  $('#sign-in-form').show()
  $('#game-board-form').hide()
}

const signUpFailure = function () {
  $('#message').text('Oops, there is an error with your sign up.')
}

const signInSuccess = function (response) {
  $('#message').text('You have signed in successfully!')
  // saves the users information thats in the api resposne to the store.js file
  console.log(response)
  store.user = response.user
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#new-game-form').show()
  $('#game-board-form').hide()
}

const signInFailure = function () {
  $('#message').text('Oops, there is an error with your sign in.')
}

const signOutSuccess = function (response) {
  $('#message').text('You have signed out successfully!')
  store.user = null
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#new-game-form').hide()
  $('#game-board-form').hide()
}

const signOutFailure = function () {
  $('#message').text('Oops, there is an error with your sign out.')
}

const changePasswordSuccess = function (response) {
  $('#message').text('You have changed your password successfully!')
  $('#sign-up-form').hide()
  $('#sign-in-form').show()
  $('#change-password-form').show()
  $('#new-game-form').show()
  $('#game-board-form').hide()
}

const changePasswordFailure = function () {
  $('#message').text('Oops, there is an error with your password change.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
