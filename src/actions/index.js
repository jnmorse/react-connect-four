import { RESET_GAME, PLAYER_MOVE } from './types'

function resetGame() {
  return {
    type: RESET_GAME
  }
}

function playerMove(coords) {
  return { type: PLAYER_MOVE, payload: coords }
}

export { resetGame, playerMove }
