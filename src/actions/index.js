const { RESET_GAME } = require('./types')

export function resetGame() {
  return {
    type: RESET_GAME
  }
}

export default { resetGame }
