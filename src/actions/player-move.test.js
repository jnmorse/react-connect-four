import { PLAYER_MOVE } from './types'
import playerMove from './player-move'

test('should return an action with the currect type and a column in payload', () => {
  const action = playerMove(3)

  expect(action).toEqual({ type: PLAYER_MOVE, payload: 3 })
})

test('should not return an action with PLAYER_MOVE if no column present', () => {
  const action = playerMove()

  expect(action).not.toEqual({ type: PLAYER_MOVE })
  expect(action.hasOwnProperty('type')).toBeTruthy()
})
