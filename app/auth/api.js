'use strict'

const signUp = function (data) {
  console.log(data)
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-production.herokuapp.com/sign-up',
    data
  })
}

module.export = {
  signUp
}
