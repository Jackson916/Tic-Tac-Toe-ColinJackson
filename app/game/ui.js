'use strict'
const store = require('../store')

const successMessage = function (newText) {
  // reusable function to display text
  $('#game-message').text(newText)
  $('#game-message').removeClass('failure')
  $('#game-message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#game-message').text(newText)
  $('#game-message').removeClass('success')
  $('#game-message').addClass('failure')
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
  $('#game-message').removeClass('failure')
  $('#game-message').removeClass('success')
  $('#game-message').text(
    'It is ' + currentPlayer + "'s turn to choose a space!"
  )
}

const onGameIsOver = function (currentPlayer) {
  $('#game-message').removeClass('failure')
  $('#game-message').removeClass('success')
  successMessage(
    currentPlayer + " wins! Press 'New Game' button to play again!"
  )
}

const onGetTieMessage = function () {
  $('#game-message').removeClass('failure')
  $('#game-message').removeClass('success')
  $('#game-message').text('It is a tie game.')
}

const onMustStartGameMessage = function () {
  $('#game-message').removeClass('failure')
  $('#game-message').removeClass('success')
  $('#game-message').text("You must click the 'New Game' button to play.")
}
module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onBoxOccupied,
  onGameIsOver,
  onGetTieMessage,
  onMustStartGameMessage,
  onCurrentPlayerTurn
}
