import React from 'react'
import { render } from 'react-dom'
import Tag from 'antd/lib/tag'
import { Cell, Card } from '../src'
import { cellData, cardData, formater } from './data'
import '../src/index.less'

const customs = {
  tag({ text, props }) {
    return (
      <Tag {...props}>{text}</Tag>
    )
  },
}

render((
  <div>
    <Cell customs={customs} data={cellData} formater={formater} />
    <Card align="justify" data={cardData} />
  </div>
), document.getElementById('root'))
