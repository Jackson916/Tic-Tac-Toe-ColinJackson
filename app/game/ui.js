'use strict'
const store = require('../store')

const successMessage = function (newText) {
  $('#game-message').text(newText)
  $('#game-message').hide('failure')
  $('#game-message').show('success')
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#game-message').text(newText)
  $('#game-message').hide('success')
  $('#game-message').show('failure')
}

const onCreateGameSuccess = function (responseData) {
  successMessage('New game created successfully! X goes first!')
  store.game = responseData.game
}

const onCreateGameFailure = function () {
  failureMessage('New game creation failed')
}

const onUpdateGameSuccess = function (responseData) {
  store.game = responseData.game
}

const onUpdateGameFailure = function () {
  failureMessage('Error: game was not updated in API')
}

const onBoxOccupied = function () {
  failureMessage('This space is already taken. Choose an empty space!')
}

const onCurrentPlayerTurn = function (currentPlayer) {
  $('#game-message').hide('failure')
  $('#game-message').hide('success')
  $('#game-message').text(
    'It is ' + currentPlayer + "'s turn to choose a space!"
  )
}

const onGameOver = function (currentPlayer) {
  $('#game-message').hide('failure')
  $('#game-message').show('success')
  successMessage(
    currentPlayer + " wins! Press 'New Game' button to play again!"
  )
}

const onGetTieMessage = function () {
  $('#game-message').hide('failure')
  $('#game-message').hide('success')
  $('#game-message').text('It is a tie game.')
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onBoxOccupied,
  onGameOver,
  onGetTieMessage,
  onCurrentPlayerTurn
}
