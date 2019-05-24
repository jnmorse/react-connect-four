import { GAME_WON, GAME_TIED, PLAYER_MOVE, RESET_GAME } from '../actions/types'
import gameReducer, { defaultState } from './game-reducer'

const playerMove = jest.fn(col => ({ type: PLAYER_MOVE, payload: col }))

test('when first called should return the expected values', () => {
  const { board, turn, locked, lastMove } = gameReducer(undefined, {
    type: 'no type'
  })

  expect(board).toHaveLength(7)

  board.forEach(column => expect(column).toHaveLength(6))

  expect(turn).toBe(1)

  expect(locked).toBeFalsy()
  expect(lastMove).toBeFalsy()
})

test('when the playerMove action is called, the board is updated to reflect that', () => {
  const newState = gameReducer(undefined, playerMove(3))

  expect(newState.board[3][5]).toEqual(1)
  expect(playerMove).toBeCalledTimes(1)
  expect(newState.turn).toBe(2)
})

test('when reset the game should return the default state', () => {
  const firstState = gameReducer(defaultState, playerMove(4))
  const resetState = gameReducer(firstState, { type: RESET_GAME })

  expect(resetState).not.toEqual(firstState)
  expect(resetState).toEqual(defaultState)
})

test('i am unable to place a checker in a full column', () => {
  const filledColumn = Array(6).fill(1)
  const board = [...defaultState.board]
  board[3] = filledColumn

  const myState = { ...defaultState, turn: 2, board }

  const newState = gameReducer(myState, playerMove(3))

  expect(newState).toEqual(myState)
})

describe('when the game is tied or won, the board should be locked', () => {
  const gameWonState = gameReducer(undefined, { type: GAME_WON })
  const gameTiedState = gameReducer(undefined, { type: GAME_TIED })

  test('GAME_WON', () => {
    expect(gameWonState.locked).toBeTruthy()

    const madeAMove = gameReducer(gameWonState, {
      type: PLAYER_MOVE,
      payload: 3
    })

    expect(madeAMove).toEqual(gameWonState)
  })

  test('GAME_TIED', () => {
    expect(gameTiedState.locked).toBeTruthy()

    const madeAMove = gameReducer(gameTiedState, {
      type: PLAYER_MOVE,
      payload: 3
    })

    expect(madeAMove).toEqual(gameTiedState)
  })
})
