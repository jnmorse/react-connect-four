import React from 'react'
import { shallow } from 'enzyme'

import Layout from './Layout'

let wrapper

describe('<Layout />', () => {
  beforeAll(() => {
    wrapper = shallow(
      <Layout title="Some Title">
        <div>Hi There</div>
      </Layout>
    )
  })

  afterAll(() => {
    wrapper.unmount()
  })

  test('contain a header with some h1 text', () => {
    const header = wrapper.find('header')

    expect(header).toHaveLength(1)

    expect(header.find('h1')).toHaveLength(1)
  })

  test('contain a main element', () => {
    expect(wrapper.find('main')).toHaveLength(1)
  })

  test('contain a footer', () => {
    expect(wrapper.find('footer')).toHaveLength(1)
  })
})
