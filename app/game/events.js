'use strict'

const gameApi = require('./Api.js')
const gameUi = require('./Ui.js')
const store = require('../store')

const onCreateGame = function (event) {
  event.preventDefault()
  gameApi.createGame().then(gameUi.onCreateGameSuccess).catch(gameUi.onCreateGameFailure)
}


module.exports = {
  onCreateGame
}
