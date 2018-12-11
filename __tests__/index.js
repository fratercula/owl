import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import parser from '../src/parser'

Enzyme.configure({ adapter: new Adapter() })

const formater = {
  align: 'vertical',
  rules: [
    ['time'],
  ],
}

const data = {
  time: '2018-18-19 12:23:34',
}

describe('Parser', () => {
  const P = parser(formater, data)
  const wrapper = mount(<P {...data} />)

  it('test', () => {
    expect(wrapper.text()).toEqual(data.time)
  })
})
