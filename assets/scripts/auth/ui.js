
const store = require('../store')

const signUpSuccess = function () {
  $('#message').text('You have sign up successfully!')
}

const signUpFailure = function () {
  $('#message').text('Oops, there is an error with your sign up.')
}

const signInSuccess = function () {
  $('#message').text('You have signed in successfully!')
}

const signInFailure = function () {
  $('#message').text('Oops, there is an error with your sign in.')
}

const signOutSuccess = function () {
  $('#message').text('You have signed out successfully!')
}

const signOutFailure = function () {
  $('#message').text('Oops, there is an error with your sign out.')
}

const changePasswordSuccess = function () {
  $('#message').text('You have changed your password successfully!')
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
