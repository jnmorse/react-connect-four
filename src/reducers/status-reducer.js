import { GAME_WON, RESET_GAME } from '../actions/types'

export default function statusReducer(state = false, action) {
  switch (action.type) {
    case RESET_GAME: {
      return false
    }

    case GAME_WON: {
      return `Player ${action.payload} won`
    }

    default: {
      return state
    }
  }
}
