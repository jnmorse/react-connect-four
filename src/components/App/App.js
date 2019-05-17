import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'

import Layout from '../Layout'

const App = () => (
  <Provider store={store}>
    <Layout title="Connect Four" subtitle={() => <p>Under Construction</p>}>
      <p>This is where my board will go eventually</p>
    </Layout>
  </Provider>
)

export default App
