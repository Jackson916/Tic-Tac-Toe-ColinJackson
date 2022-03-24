'use strict'

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>User signed up successfully</p>')

  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')
}
module.export = {
  onSignUpSuccess,
  onSignUpFailure
}
