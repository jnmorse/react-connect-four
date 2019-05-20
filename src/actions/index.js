import { RESET_GAME, PLAYER_MOVE, GAME_WON } from './types'

function resetGame() {
  return {
    type: RESET_GAME
  }
}

function gameWon(player) {
  return {
    type: GAME_WON,
    payload: player
  }
}

function playerMove(coords) {
  return { type: PLAYER_MOVE, payload: coords }
}

export { resetGame, playerMove, gameWon }
