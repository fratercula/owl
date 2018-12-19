import React from 'react'
import { render } from 'react-dom'
import Tag from 'antd/lib/tag'
import { Cell, Card } from '../src'
import { cellData, cardData, formater } from './data'
import '../src/index.less'

const cellCustoms = {
  tag({ text, props }) {
    return (
      <Tag {...props}>{text}</Tag>
    )
  },
}

const cardCustoms = {
  tag({ value }) { // eslint-disable-line react/prop-types
    return (
      <Tag>{value}</Tag>
    )
  },
}

function Entry() {
  return (
    <div>
      <Cell customs={cellCustoms} data={cellData} formater={formater} />
      <Card customs={cardCustoms} align="justify" data={cardData} />
    </div>
  )
}

render(<Entry />, document.getElementById('root'))
