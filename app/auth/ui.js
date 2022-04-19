'use strict'
const store = require('../store.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>User signed up successfully</p>')

  $('#sign-up-form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')
}

const onSignInSuccess = function (response) {
  $('#auth-display').html('<p>User signed in successfully</p>')

  $('form').trigger('reset')

  $('.header2').hide()
  $('#sign-in-form').hide()
  $('.header3').hide()
  $('#game-message').show()
  $('#sign-up-form').hide()
  $('#sign-out-button').show()

  $('.box').show()
  $('#create-game').show()

  store.user = response.user
}

const onSignInFailure = function () {
  $('#auth-display').html('<p>Error while signing in</p>')
}
const onSignOutSuccess = function () {
  $('#auth-display').html('<p>User signed out successfully</p>')

  $('#sign-out-button').hide()
  $('#create-game').hide()
  $('.box').hide()

  $('.header2').show()
  $('#sign-in-form').show()
  $('.header3').show()
  $('#sign-up-form').show()
  $('#game-message').hide()
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
