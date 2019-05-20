import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'

import App from './App'
import Layout from '../Layout'
import Controls from '../Controls'

let wrapper

describe('<App />', () => {
  beforeAll(() => {
    wrapper = shallow(<App />)
  })

  afterAll(() => {
    wrapper.unmount()
  })

  test('it should contain the <Layout />', () => {
    expect(wrapper.find(Layout)).toHaveLength(1)
  })

  test('it should contain <Controls />', () => {
    expect(wrapper.find(Controls)).toHaveLength(1)
  })

  test('there should be a <Provider />', () => {
    expect(wrapper.find(Provider)).toHaveLength(1)
  })
})
