import { combineReducers } from 'redux'

import gameReducer from './game-reducer'
import statusReducer from './status-reducer'

export default combineReducers({
  status: statusReducer,
  game: gameReducer
})
