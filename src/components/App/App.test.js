import React from 'react'
import { shallow } from 'enzyme'

import App from './App'
import Layout from '../Layout'

let wrapper

describe('<App />', () => {
  beforeAll(() => {
    wrapper = shallow(<App />)
  })

  test('it should be a function component', () => {
    expect(wrapper.instance()).toBe(null)
  })

  test('it should contain the Layout component', () => {
    expect(wrapper.find(Layout)).toHaveLength(1)
  })
})
