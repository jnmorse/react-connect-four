const types = {
  GAME_WON: 'GAME_WON',
  GAME_LOSS: 'GAME_LOSS',
  GAME_TIED: 'GAME_TIED',
  RESET_GAME: 'RESET_GAME'
}

const typeValidator = {
  get(obj, prop) {
    if (obj[prop]) {
      return obj[prop]
    }

    throw new TypeError(`${prop} is not a valid action type`)
  }
}

module.exports = new Proxy(types, typeValidator)
