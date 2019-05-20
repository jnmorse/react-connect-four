import React from 'react'
import { shallow } from 'enzyme'

import Controls from './Controls'

const resetGame = jest.fn(() => {})

let wrapper

describe('<Controls />', () => {
  beforeAll(() => {
    wrapper = shallow(<Controls resetGame={resetGame} />)
  })

  test('there should be at least one button', () => {
    const button = wrapper.find('button')

    expect(button.length).toBeGreaterThanOrEqual(1)
  })

  test('when the reset button is clicked call resetGame function prop', () => {
    wrapper.find('button').simulate('click')

    expect(resetGame).toBeCalledTimes(1)
  })
})
