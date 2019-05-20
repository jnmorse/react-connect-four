import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'

import Layout from '../Layout'
import StatusDisplay from '../StatusDisplay'
import GameBoard from '../GameBoard'
import Controls from '../Controls'

const App = () => (
  <Provider store={store}>
    <Layout title="Connect Four">
      <StatusDisplay />
      <GameBoard board={[[]]} />
      <Controls />
    </Layout>
  </Provider>
)

export default App
