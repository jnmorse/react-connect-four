import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'

import Layout from '../Layout'
import StatusDisplay from '../StatusDisplay'
import GameBoard from '../GameBoard'
import Controls from '../Controls'
import SEO from '../SEO'

const App = () => (
  <Provider store={store}>
    <Layout title="Connect Four">
      <SEO
        title="React Connect Four"
        description="Connect four game writting in React"
        keywords={['react', 'chingu', 'connect four']}
      />
      <StatusDisplay />
      <GameBoard />
      <Controls />
    </Layout>
  </Provider>
)

export default App
