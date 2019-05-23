import { GAME_WON } from './types'

export default function gameWon(player) {
  return {
    type: GAME_WON,
    payload: player
  }
}
