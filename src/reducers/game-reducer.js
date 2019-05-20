const { GAME_WON, RESET_GAME, PLAYER_MOVE } = require('../actions/types')

export const defaultState = {
  turn: 1,
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

    case PLAYER_MOVE: {
      const newBoard = [...state.board].map(col => [...col])

      let y = false

      for (let i = newBoard[action.payload.x].length - 1; i > 0; i--) {
        if (y === false && newBoard[action.payload.x][i] === 0) {
          y = i
        }
      }

      newBoard[action.payload.x][y] = state.turn

      return { ...state, board: newBoard, turn: state.turn === 1 ? 2 : 1 }
    }

    default: {
      return { ...state }
    }
  }
}
