import React, { Component } from 'react'
import { Card } from '../../../src'
import checkbox from './customs'

const mainData = [
  [
    {},
    {
      label: '订单编号',
      value: '20180912123045',
    },
    {
      label: '时间',
      value: '2018-09-12 12:30:45',
    },
  ],
  [
    {
      label: '金额',
      value: 'V-T To justify printed text means to adjust the spaces between the words so that each line of type is exactly the same length. 使 (文本) 对齐',
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
      label: {
        text: '金额',
        width: 100,
        color: 'blue',
        marginRight: 12,
        colon: ' : ',
      },
      margin: [20, 3, 4],
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
      value: 'aksdj4',
    },
    {
      label: 'checkbox',
      type: 'checkbox',
      props: {
        checked: false,
      },
    },
  ],
]

const options = {
  labelColon: ' ? ',
  labelWidth: 0,
}

export default class extends Component {
  state = {
    data: JSON.parse(JSON.stringify(mainData)),
  }

  onChange = (type, e) => {
    const { data } = this.state
    data[5][1].props.checked = e
    this.setState({ data })
  }

  render() {
    const { data } = this.state

    return (
      <Card
        customs={{ checkbox }}
        options={options}
        data={data}
        onChange={this.onChange}
      />
    )
  }
}
