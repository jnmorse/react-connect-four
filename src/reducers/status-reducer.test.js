import { GAME_WON, GAME_TIED, RESET_GAME } from '../actions/types'
import statusReducer from './status-reducer'

test('returns false if not relivate action', () => {
  const newState = statusReducer(undefined, { type: 'other_type' })

  expect(newState).toBeFalsy()
})

describe('when giving currect actions', () => {
  let newState = false

  test('should return "Player 1 Won" when giving GAME_WON action with payload 1', () => {
    newState = statusReducer(newState, { type: GAME_WON, payload: 1 })

    expect(newState).toEqual('Player 1 Won')
  })

  test('should return "Player 2 Won" when giving GAME_WON action with payload 2', () => {
    newState = statusReducer(newState, { type: GAME_WON, payload: 2 })

    expect(newState).toEqual('Player 2 Won')
  })

  test('should return "Game Tied" with tied action', () => {
    newState = statusReducer(newState, { type: GAME_TIED })

    expect(newState).toEqual('Game Tied')
  })

  test('should return false when game is reset', () => {
    newState = statusReducer(newState, { type: RESET_GAME })

    expect(newState).toBeFalsy()
  })
})
