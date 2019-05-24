import { GAME_WON, RESET_GAME, GAME_TIED } from '../actions/types'

export default function statusReducer(state = false, action) {
  switch (action.type) {
    case RESET_GAME: {
      return false
    }

    case GAME_TIED: {
      return 'Game Tied'
    }

    case GAME_WON: {
      return `Player ${action.payload} Won`
    }

    default: {
      return state
    }
  }
}
