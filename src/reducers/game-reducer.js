const { GAME_WON, RESET_GAME } = require('../actions/types')

export const defaultState = {
  board: Array(7).fill(Array(6).fill(0))
}

export default function gameReducer(state = defaultState, action) {
  switch (action.type) {
    case GAME_WON: {
      return { ...state, status: 'won' }
    }

    case RESET_GAME: {
      return defaultState
    }

    default: {
      return { ...state }
    }
  }
}
