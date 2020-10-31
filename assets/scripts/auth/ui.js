
// imports data stored in the store.js file to be used in this ui.js file
const store = require('./../store')

// Gives the user a message indicating that they've signed up successfully
const signUpSuccess = function (data) {
  $('#message').text('You have sign up successfully!')
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#sign-up-form').hide()
  $('#sign-in-form').show()
  $('#game-board-form').hide()
  // logged successful sign up by showing user's sign up information in the console
  console.log('signUpSuccess ran. Data is:', data)
  // claears the form of any data the user populated with to submit any authentication requests they used.
  $('form').trigger('reset')
  // loggs the .trigger jQuery function to check if the authentication forms actually clear.
  console.log('("form").trigger("reset") ran!', $('form').trigger('reset'))
}

// Gives the user a message indicating that an error has occured with their sign up
const signUpFailure = function (error) {
  $('#message').text('Oops, there is an error with your sign up.')
  // logged failed sign up by showing error message in console as to why it failed
  console.error('signUpFailure ran. Error is :', error)
  // claears the form of any data the user populated with to submit any authentication requests they used.
  $('form').trigger('reset')
  // loggs the .trigger jQuery function to check if the authentication forms actually clear.
  console.log('("form").trigger("reset") ran!', $('form').trigger('reset'))
}

// Gives the user a message indicating that they've signed in successfully
const signInSuccess = function (data) {
  $('#message').text('You have signed in successfully!')
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#new-game-form').show()
  $('#game-board-form').hide()
  // logged successful sign in by showing user's sign in information as a response
  console.log('signInSuccess ran. Data is :', data)
  // stores user's sign in data in store.js to be used for future authentication requests
  store.user = data.user
  // claears the form of any data the user populated with to submit any authentication requests they used.
  $('form').trigger('reset')
  // loggs the .trigger jQuery function to check if the authentication forms actually clear.
  console.log('("form").trigger("reset") ran!', $('form').trigger('reset'))
}

// Gives the user a message indicating that an error has occured with their sign in
const signInFailure = function (error) {
  $('#message').text('Oops, there is an error with your sign in.')
  // logged failed sign in by showing error message in console as to why it failed
  console.error('signInFailure ran. Error is :', error)
  // claears the form of any data the user populated with to submit any authentication requests they used.
  $('form').trigger('reset')
  // loggs the .trigger jQuery function to check if the authentication forms actually clear.
  console.log('("form").trigger("reset") ran!', $('form').trigger('reset'))
}

// Gives the user a message indicating that they've signed out successfully
const signOutSuccess = function () {
  // actual text user see's in broswer when they successfully signed out
  $('#message').text('You have signed out successfully!')
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#new-game-form').hide()
  $('#game-board-form').hide()
  // removes stored data and signs them out
  store.user = null
  // logs store.user = null function to check if user is indeed signed out
  console.log('store.use = null part ran!', store.user)
  // claears the form of any data the user populated with to submit any authentication requests they used.
  $('form').trigger('reset')
  // loggs the .trigger jQuery function to check if the authentication forms actually clear.
  console.log('("form").trigger("reset") ran!', $('form').trigger('reset'))
}

// Gives the user a message indicating that an error has occured with their sign out
const signOutFailure = function (error) {
  $('#message').text('Oops, there is an error with your sign out.')
  // logged failed sign out by showing error message in console as to why it failed
  console.error('signOutailure ran. Error is :', error)
  // claears the form of any data the user populated with to submit all authentication requests they used, sign in and sign up.
  $('form').trigger('reset')
  // loggs the .trigger jQuery function to check if the authentication forms actually clear.
  console.log('("form").trigger("reset") ran!', $('form').trigger('reset'))
}

// Gives the user a message indicating that they've changed their password successfully
const changePasswordSuccess = function (response) {
  $('#message').text('You have changed your password successfully!')
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#change-password-form').show()
  $('#new-game-form').show()
  $('#game-board-form').hide()
  $('#sign-out-form').show()
  // logged the success of a password change by showing in the console the message of 'nothing was returned'.
  console.log('changePasswordSuccess ran and nothing was returned back to you!')
  // claears the form of any data the user populated with to submit the change password form.
  $('form').trigger('reset')
  // loggs the .trigger jQuery function to check if change password form actually clears.
  console.log('("form").trigger("reset") ran!', $('form').trigger('reset'))
}

// Gives the user a message indicating that an error has occured with their password change attempt
const changePasswordFailure = function (error) {
  $('#message').text('Oops, there is an error with your password change.')
  // logged password change failed by showing error message in console as to why it failed
  console.error('changePasswordFailure ran. Error is:', error)
  // claears the form of any data the user populated with to submit the change password form.
  $('form').trigger('reset')
  // loggs the .trigger jQuery function to check if change password form actually clears.
  console.log('("form").trigger("reset") ran!', $('form').trigger('reset'))
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
