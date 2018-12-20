import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Card from '../src/card'

Enzyme.configure({ adapter: new Adapter() })

const data = [
  [
    {},
    {
      label: '订单编号',
      value: '20180912123045',
    },
    {
      label: '时间',
    },
  ],
  [
    {
      label: '金额',
      value: 'V-T To justify printed text means to adjust the spaces between the words so that each line of type is exactly the same length. 使 (文本) 对齐',
      align: 200,
    },
    {},
    {
      value: '一个商品',
    },
  ],
  [
    {
      type: 'space',
    },
  ],
  [
    {
      label: '金额',
      align: 100,
      value: '2018-09-12 12:30:45',
    },
    {
      label: '商品',
      value: '一个商品',
    },
  ],
  [
    {
      type: 'line',
      props: {
        style: {
          marginTop: 20,
        },
      },
    },
  ],
  [
    {
      type: 'tag',
      label: 'tag',
      value: {
        className: 'red',
      },
    },
  ],
]

describe('Card', () => {
  it('test', () => {
    const wrapper = mount(<Card align="justify" data={data} />)
    expect(
      wrapper
        .find('.react-owl-card-group')
        .length,
    ).toEqual(data.length)

    expect(
      wrapper
        .find('.react-owl-card-unit')
        .length,
    ).toEqual(data.reduce((a, c) => a + c.length, 0))

    expect(
      wrapper
        .find('.react-owl-card-group')
        .at(0)
        .find('.react-owl-card-unit')
        .length,
    ).toEqual(data[0].length)

    expect(
      wrapper
        .find('.react-owl-card-group')
        .at(1)
        .find('.react-owl-card-unit')
        .at(2)
        .find('.react-owl-card-unit-label')
        .length,
    ).toEqual(0)

    expect(
      wrapper
        .find('.react-owl-card-group')
        .at(0)
        .find('.react-owl-card-unit')
        .at(2)
        .find('.react-owl-card-unit-value')
        .length,
    ).toEqual(0)

    expect(
      wrapper
        .find('.react-owl-card-group')
        .at(1)
        .find('.react-owl-card-unit')
        .at(2)
        .find('.react-owl-card-unit-value')
        .text(),
    ).toEqual(data[1][2].value)

    expect(
      wrapper
        .find('.react-owl-card-line')
        .length,
    ).toEqual(1)

    expect(
      wrapper
        .find('.react-owl-card-space')
        .length,
    ).toEqual(1)

    expect(
      wrapper
        .find('.react-owl-card-unit')
        .at(0)
        .prop('style'),
    ).toEqual({ justifyContent: 'space-between' })

    expect(
      wrapper
        .find('.react-owl-card-unit-label')
        .at(3)
        .prop('style'),
    ).toEqual({ width: 100 })
  })

  it('custom', () => {
    const customs = {
      tag({ label, value }) { // eslint-disable-line react/prop-types
        const { className } = value
        return (
          <div className={className}>{label}</div>
        )
      },
    }
    const wrapper = mount(<Card customs={customs} align="justify" data={data} />)

    expect(
      wrapper
        .find('.red')
        .at(0)
        .text(),
    ).toEqual('tag')
  })
})
