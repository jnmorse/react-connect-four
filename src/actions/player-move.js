import { PLAYER_MOVE } from './types'

export default function playerMove(column) {
  return { type: PLAYER_MOVE, payload: column }
}
