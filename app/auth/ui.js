'use strict'

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>User signed up successfully</p>')

  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')
}

const onSignInSuccess = function () {
  $('#auth-display').html('<p>User signed in successfully</p>')

  $('form').trigger('reset')
}

const onSignInFailure = function () {
  $('#auth-display').html('<p>Error while signing in</p>')
}
const onSignOutSuccess = function () {
  $('#auth-display').html('<p>User signed out successfully</p>')

  $('form').trigger('reset')
}

const onSignOutFailure = function () {
  $('#auth-display').html('<p>Error while signing out</p>')
}
module.export = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure
}
