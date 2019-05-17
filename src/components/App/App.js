import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'

import Layout from '../Layout'
import StatusDisplay from '../StatusDisplay'

const App = () => (
  <Provider store={store}>
    <Layout title="Connect Four">
      <StatusDisplay />
      <p>This is where my board will go eventually</p>
    </Layout>
  </Provider>
)

export default App
