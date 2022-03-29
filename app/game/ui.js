'use strict'

const store = require('../store.js')

const onCreateGameSuccess = function (response) {
  $('#game-display').html('<p>User signed up successfully</p>')
  store.game = response.game
}
const onCreateGameFailure = function () {
  $('#game-display').html('<p>User signed up successfully</p>')
}
const onUpdateGameSuccess = function (response) {
  $('#game-display').html('<p>Game Restarted</p>')
  store.game = response.game
}
const onUpdateGameFailure = function () {
  $('#game-display').html('<p>Game Failed To Restart</p>')
}
const onCurrentPlayerTurn = function (currentPlayer) {
  $('#game-display').html('<p>currentPlayer + "turn to choose."</p>')
}
const onTieGame = function () {
  $('#game-display').html('<p>Tie Game!</p>')
}
const onGameOver = function (currentPlayer) {
  $('#game-display').html('<p>currentPlayer + "Wins!"</p>')
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onCurrentPlayerTurn,
  onTieGame,
  onGameOver
}
