
const getFormFields = require('./../../../lib/get-form-fields')

const ui = require('./ui')
const api = require('./api')

const onSignUp = function (event) {
  event.preventDefault() // prevents default action of refreshing page

  const form = event.target

  const data = getFormFields(form) // send data from form to the API

  api.signUp(data)
    .then(ui.signUpSuccess) // responsible for successful inputs
    .catch(ui.signUpFailure) // responsible for failed inputs
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onStartPlaying = function (event) {
  event.preventDefault()
  // prevents page form refreshing
  const form = event.target
  // gets form from the event
  const data = getFormFields(form)
  // sends sata to the api
  api.startPlaying(data)
    .then(ui.newGameSuccess)
  // responseoble for successful responses
    .catch(ui.newGameFailure)
  // responseible for failed attempts
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onStartPlaying
}
