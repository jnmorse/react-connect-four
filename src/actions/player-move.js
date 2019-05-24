import { PLAYER_MOVE } from './types'

export default function playerMove(column) {
  if (column !== undefined) {
    return { type: PLAYER_MOVE, payload: column }
  }

  return { type: 'ERROR', payload: 'column was not provided to playerMove' }
}
