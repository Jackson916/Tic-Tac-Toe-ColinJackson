'use strict'
const store = require('../store.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>User signed up successfully</p>')

  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').hide()
  $('h2').hide()
  $('#create-game').show()
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')
}

const onSignInSuccess = function (response) {
  $('#auth-display').html('<p>User signed in successfully</p>')

  $('form').trigger('reset')

  $('#sign-in-form').hide()
  $('h3').hide()
  $('#new-game').show()
  $('#sign-out-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()

  console.log(response)
  store.user = response.user
}

const onSignInFailure = function () {
  $('#auth-display').html('<p>Error while signing in</p>')
}
const onSignOutSuccess = function () {
  $('#auth-display').html('<p>User signed out successfully</p>')

  $('#sign-out').hide()
  $('#new-game').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#game-board').hide()

  $('form').trigger('reset')
}

const onSignOutFailure = function () {
  $('#auth-display').html('<p>Error while signing out</p>')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure
}
