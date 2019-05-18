import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducers from '../reducers'

const composeEnhancers = composeWithDevTools({})

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
)

const store = createStore(reducers, enhancer)

export default store
