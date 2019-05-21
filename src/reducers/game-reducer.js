const {
  GAME_WON,
  RESET_GAME,
  PLAYER_MOVE,
  GAME_TIED
} = require('../actions/types')

export const defaultState = {
  turn: 1,
  lastMove: false,
  locked: false,
  board: Array(7).fill(Array(6).fill(0))
}

export default function gameReducer(state = defaultState, action) {
  switch (action.type) {
    case GAME_TIED:
    case GAME_WON: {
      return { ...state, locked: true }
    }

    case RESET_GAME: {
      return defaultState
    }

    case PLAYER_MOVE: {
      if (state.locked) {
        return state
      }

      const newBoard = [...state.board].map(col => [...col])

      const y = newBoard[action.payload.x].reduce((acc, cell, index) => {
        switch (cell) {
          case 0: {
            return index
          }

          default: {
            return acc
          }
        }
      }, false)

      if (y !== false) {
        newBoard[action.payload.x][y] = state.turn

        return {
          ...state,
          board: newBoard,
          turn: state.turn === 1 ? 2 : 1,
          lastMove: { ...action.payload, y }
        }
      }

      return { ...state }
    }

    default: {
      return { ...state }
    }
  }
}
