import gameTied from './game-tied'
import { GAME_TIED } from './types'

test('it returns and action type of GAME_TIED', () => {
  const { type } = gameTied()

  expect(type).toBe(GAME_TIED)
})
