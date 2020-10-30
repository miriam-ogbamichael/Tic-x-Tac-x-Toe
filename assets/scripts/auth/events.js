// requires getFormFields file to be used in this file
const getFormFields = require('./../../../lib/get-form-fields')

// requires api file to be used in this file
const api = require('./api')
// requires ui file to be used in this file
const ui = require('./ui')

// SIGN UP functionality
const onSignUp = function (event) {
  // prevents default action of refreshing page
  event.preventDefault()
  console.log('sign up ran!')

  // send data from form to the API
  const data = getFormFields(event.target)
  // logged event.target
  console.log('event.target is', event.target)
  // logged event
  console.log('event is', event)

  api.signUp(data)
    // responsible for successful inputs
    .then(ui.signUpSuccess)
    // responsible for failed inputs
    .catch(ui.signUpFailure)
}

// SIGN IN functionality
const onSignIn = function (event) {
  // prevents default action of refreshing page
  event.preventDefault()
  console.log('sign in ran!')

  // send data from form to the API
  const data = getFormFields(event.target)

  api.signIn(data)
    // responsible for successful inputs
    .then(ui.signInSuccess)
    // responsible for failed inputs
    .catch(ui.signInFailure)
}

// CHANGE PASSWORD functionality
const onChangePassword = function (event) {
  // prevents default action of refreshing page
  event.preventDefault()
  console.log('change password ran!')

  // send data from form to the API
  const data = getFormFields(event.target)

  api.changePassword(data)
    // responsible for successful inputs
    .then(ui.changePasswordSuccess)
    // responsible for failed inputs
    .catch(ui.changePasswordFailure)
}

// SIGN OUT functionality
const onSignOut = function (event) {
  // prevents default action of refreshing page
  event.preventDefault()
  console.log('sign out ran!')

  api.signOut()
    // responsible for successful inputs
    .then(ui.signOutSuccess)
    // responsible for failed inputs
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out-form').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
