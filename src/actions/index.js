import { RESET_GAME, PLAYER_MOVE, GAME_WON, GAME_TIED } from './types'

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

function gameTied() {
  return {
    type: GAME_TIED
  }
}

function playerMove(coords) {
  return { type: PLAYER_MOVE, payload: coords }
}

export { resetGame, playerMove, gameWon, gameTied }
