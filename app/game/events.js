'use strict'

const gameApi = require('./Api.js')
const gameUi = require('./Ui.js')
const store = require('../store')

const onCreateGame = function (event) {
  event.preventDefault()
  gameApi
    .createGame()
    .catch(gameUi.onCreateGameFailure)
    .then(gameUi.onCreateGameSuccess)
}
let currentPlayer = 'X'

const changePlayer = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}
const checkWin = function () {
  const space0 = $('#0').text()
  const space1 = $('#1').text()
  const space2 = $('#2').text()
  const space3 = $('#3').text()
  const space4 = $('#4').text()
  const space5 = $('#5').text()
  const space6 = $('#6').text()
  const space7 = $('#7').text()
  const space8 = $('#8').text()

  if (space0 === space1 && space0 === space2) {
    if (space0 === 'X') {
      return 'X'
    } else if (space0 === 'O') {
      return 'O'
    }
  }
  if (space3 === space4 && space3 === space5) {
    if (space3 === 'X') {
      return 'X'
    } else if (space3 === 'O') {
      return 'O'
    }
  }
  if (space6 === space7 && space6 === space8) {
    if (space6 === 'X') {
      return 'X'
    } else if (space6 === 'O') {
      return 'O'
    }
  }
  if (space0 === space3 && space0 === space6) {
    if (space0 === 'X') {
      return 'X'
    } else if (space0 === 'O') {
      return 'O'
    }
  }
  if (space1 === space4 && space1 === space7) {
    if (space1 === 'X') {
      return 'X'
    } else if (space1 === 'O') {
      return 'O'
    }
  }
  if (space2 === space5 && space2 === space8) {
    if (space2 === 'X') {
      return 'X'
    } else if (space2 === 'O') {
      return 'O'
    }
  }
  if (space0 === space4 && space0 === space8) {
    if (space0 === 'X') {
      return 'X'
    } else if (space0 === 'O') {
      return 'O'
    }
  }
  if (space2 === space4 && space2 === space6) {
    if (space2 === 'X') {
      return 'X'
    } else if (space2 === 'O') {
      return 'O'
    }
  }
  return ''
}
const checkTie = function () {
  const space0 = $('#0').text()
  const space1 = $('#1').text()
  const space2 = $('#2').text()
  const space3 = $('#3').text()
  const space4 = $('#4').text()
  const space5 = $('#5').text()
  const space6 = $('#6').text()
  const space7 = $('#7').text()
  const space8 = $('#8').text()

  if (
    space0 === '' ||
    space1 === '' ||
    space2 === '' ||
    space3 === '' ||
    space4 === '' ||
    space5 === '' ||
    space6 === '' ||
    space7 === '' ||
    space8 === ''
  ) {
    return false
  }

  return true
}

const onClickBoard = function (event) {
  event.preventDefault()
  if (store.game && store.game.over === false) {
    if ($(event.target).text() === '') {
      $(event.target).text(currentPlayer)
      const currentTurn = currentPlayer

      const winner = checkWin()

      let gameOver = winner !== ''

      if (gameOver) {
        gameUi.onGameOver(currentPlayer)
      } else if (checkTie()) {
        gameOver = true
        gameUi.onGetTieMessage()
      } else {
        changePlayer()
        gameUi.onCurrentPlayerTurn(currentPlayer)
      }
      gameApi.updateGame(event.target.id, currentTurn, gameOver)
        .then(gameUi.onUpdateGameSuccess)
        .catch(gameUi.onUpdateGameFailure)
    }
  }
}

module.exports = {
  onCreateGame,
  onClickBoard
}
