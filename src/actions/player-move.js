import { PLAYER_MOVE } from './types'

export default function playerMove(coords) {
  return { type: PLAYER_MOVE, payload: coords }
}
