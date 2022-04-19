'use strict'

// const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')

let currentPlayer = 'X'

const changePlayer = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}

// X as the first player to go
const onCreateGame = function (event) {
  event.preventDefault()
  $('.box').text('')
  currentPlayer = 'X'
  api.createGame().then(ui.onCreateGameSuccess).catch(ui.onCreateGameFailure)
}

// checkWin returns 'X' for X wins or 'O' for O wins
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
      // $('#game-message').text('X wins')
      return 'X'
    } else if (space0 === 'O') {
      // $('#game-message').text('O wins')
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

// checkTie returns false if there is not a tie, returns true if there
// are no empty strings
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

  // check to see if board spaces have empty string and return
  // false if there is an empty string
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
  // check for win first
  return true
}

// onClickBoard checks to see if a game is stored and if the game is active
const onClickBoard = function (event) {
  event.preventDefault()
  if (store.game && store.game.over === false) {
    // if space is blank, then add the X or O
    if ($(event.target).text() === '') {
      $(event.target).text(currentPlayer)
      // save value to currentTurn to send to API
      const currentTurn = currentPlayer
      // winner is storing 'X' or 'O' for winner or ''
      const winner = checkWin()

      let gameOver = winner !== ''
      if (gameOver) {
        ui.onGameIsOver(currentPlayer)
      } else if (checkTie()) {
        gameOver = true

        ui.onGetTieMessage()
      } else {
        changePlayer()
        ui.onCurrentPlayerTurn(currentPlayer)
      }

      api
        .updateGame(event.target.id, currentTurn, gameOver)
        .then(ui.onUpdateGameSuccess)
        .catch(ui.onUpdateGameFailure)
    } else {
      ui.onBoxOccupied()
    }
  } else {
    ui.onMustStartGameMessage()
  }
}

module.exports = {
  onCreateGame,
  onClickBoard
}
