import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import parser from '../src/parser'

Enzyme.configure({ adapter: new Adapter() })

const formater = {
  align: 'horizontal',
  rules: [
    [
      'time',
      {
        type: 'xxx',
      },
      {
        type: 'string',
      },
    ],
    [
      {
        type: 'link',
        key: 'nick',
        props: {
          href: 'key:url',
        },
      },
      {
        type: 'image',
        key: 'src',
        props: {
          style: {
            width: 100,
          },
        },
      },
    ],
  ],
}

const data = {
  time: '2018-18-19 12:23:34',
  nick: 'nick',
  src: '/src/img.img',
  url: '/url/url',
}

describe('Parser', () => {
  let P = parser(formater, {})
  let wrapper = mount(<P {...data} />)

  it('test', () => {
    expect(wrapper.find('.react-owl-cell').length).toEqual(2)
    expect(wrapper.find('.react-owl-cell-unit').length).toEqual(3)
    expect(wrapper.find('.react-owl-cell-unit').at(0).text()).toEqual(data.time)
    expect(wrapper.find({ href: data.url }).text()).toEqual(data.nick)
    expect(wrapper.find('.react-owl-cell-unit').at(2).children().html()).toEqual('<img src="/src/img.img" style="width: 100px;">')
    expect(wrapper.find('.react-owl-cell').at(0).prop('style')).toEqual({ display: 'inline-block' })
  })

  it('customs', () => {
    const customs = {
      test({ text, props }) {
        return (
          <div {...props}>{text}</div>
        )
      },
    }

    formater.align = 'vertical'
    formater.rules[2] = [{
      type: 'test',
      key: 'nick',
      props: { className: 'test' },
    }]

    P = parser(formater, customs)
    wrapper = mount(<P {...data} />)

    expect(wrapper.find('.react-owl-cell').get(0).style).toEqual(undefined)
    expect(wrapper.find('.react-owl-cell').length).toEqual(3)
    expect(wrapper.find('.test').text()).toEqual('nick')
  })

  it('default', () => {
    const f = { align: 'vertical' }
    const d = {}

    P = parser(f, {})
    wrapper = mount(<P {...d} />)

    expect(wrapper.html()).toEqual(null)
  })
})
