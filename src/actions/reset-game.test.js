import { RESET_GAME } from './types'
import resetGame from './reset-game'

test('return the currect action', () => {
  expect(resetGame()).toEqual({ type: RESET_GAME })
})
