
// imports data stored in the store.js file to be used in this ui.js file
const store = require('./../store')

// Gives the user a message indicating that they've signed up successfully
const signUpSuccess = function (data) {
  $('#message').text('You have sign up successfully!').show()
  $('#change-password-form').show()
  $('#sign-out-form').hide()
  $('#sign-up-form').hide()
  $('#sign-in-form').show()
  $('#game-board-form').hide()
  // claears the form of any data the user populated with to submit any authentication requests they used.
  $('form').trigger('reset')

  // times how long the message shows on the browser, makes it go away after 7000 milliseconds
  setTimeout(function () {
    $('#message').hide()
  }, 7000)
}

// Gives the user a message indicating that an error has occured with their sign up
const signUpFailure = function () {
  $('#message').text('Oops, there is an error with your sign up.').show()

  // claears the form of any data the user populated with to submit any authentication requests they used.
  $('form').trigger('reset')

  // times how long the message shows on the browser, makes it go away after 7000 milliseconds
  setTimeout(function () {
    $('#message').hide()
  }, 7000)
}

// Gives the user a message indicating that they've signed in successfully
const signInSuccess = function (data) {
  $('#message').text('You have signed in successfully!').show()
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#new-game-form').show()
  $('#game-board-form').hide()
  $('#user-game-stats-form').show()

  // stores user's sign in data in store.js to be used for future authentication requests
  store.user = data.user
  // claears the form of any data the user populated with to submit any authentication requests they used.
  $('form').trigger('reset')

  // times how long the message shows on the browser, makes it go away after 7000 milliseconds
  setTimeout(function () {
    $('#message').hide()
  }, 7000)
}

// Gives the user a message indicating that an error has occured with their sign in
const signInFailure = function () {
  $('#message').text('Oops, there is an error with your sign in.').show()
  $('#user-game-stats-form').hide()

  // claears the form of any data the user populated with to submit any authentication requests they used.
  $('form').trigger('reset')

  // times how long the message shows on the browser, makes it go away after 7000 milliseconds
  setTimeout(function () {
    $('#message').hide()
  }, 7000)
}

// Gives the user a message indicating that they've signed out successfully
const signOutSuccess = function () {
  // actual text user see's in broswer when they successfully signed out
  $('#message').text('You have signed out successfully!').show()
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#new-game-form').hide()
  $('#game-board-form').hide()
  $('#user-game-stats-form').hide()
  // removes stored data and signs them out
  store.user = null
  // claears the form of any data the user populated with to submit any authentication requests they used.
  $('form').trigger('reset')

  // times how long the message shows on the browser, makes it go away after 7000 milliseconds
  setTimeout(function () {
    $('#message').hide()
  }, 7000)
}

// Gives the user a message indicating that an error has occured with their sign out
const signOutFailure = function () {
  $('#message').text('Oops, there is an error with your sign out.').show()

  // claears the form of any data the user populated with to submit all authentication requests they used, sign in and sign up.
  $('form').trigger('reset')

  // times how long the message shows on the browser, makes it go away after 7000 milliseconds
  setTimeout(function () {
    $('#message').hide()
  }, 7000)
}

// Gives the user a message indicating that they've changed their password successfully
const changePasswordSuccess = function (response) {
  $('#message').text('You have changed your password successfully!').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#change-password-form').show()
  $('#new-game-form').show()
  $('#game-board-form').hide()
  $('#sign-out-form').show()

  // claears the form of any data the user populated with to submit the change password form.
  $('form').trigger('reset')

  // times how long the message shows on the browser, makes it go away after 7000 milliseconds
  setTimeout(function () {
    $('#message').hide()
  }, 7000)
}

// Gives the user a message indicating that an error has occured with their password change attempt
const changePasswordFailure = function () {
  $('#message').text('Oops, there is an error with your password change.').show()

  // claears the form of any data the user populated with to submit the change password form.
  $('form').trigger('reset')
  // loggs the .trigger jQuery function to check if change password form actually clears.

  // times how long the message shows on the browser, makes it go away after 7000 milliseconds
  setTimeout(function () {
    $('#message').hide()
  }, 7000)
}

// exports all contents of this file to be used in other files.
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
