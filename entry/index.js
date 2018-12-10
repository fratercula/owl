import React from 'react'
import { render } from 'react-dom'
import { Tag } from 'antd'
import Entry from '../src'
import { data, formater } from './data'

const customs = {
  tag({ text, props }) {
    return (
      <Tag {...props}>{text}</Tag>
    )
  },
}

render(<Entry customs={customs} data={data} formater={formater} />, document.getElementById('root'))
