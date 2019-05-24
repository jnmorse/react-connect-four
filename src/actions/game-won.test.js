import gameWon from './game-won'
import { GAME_WON } from './types'

test('returns the currect action type', () => {
  const action = gameWon()

  expect(action).toEqual({ type: GAME_WON })
})
