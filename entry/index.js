import React from 'react'
import { render } from 'react-dom'
import Tag from 'antd/lib/tag'
import Entry from '../src'
import Card from '../src/card'
import { data, formater } from './data'
import cardData from './card'

import '../src/index.less'
import '../src/card.less'

const customs = {
  tag({ text, props }) {
    return (
      <Tag {...props}>{text}</Tag>
    )
  },
}

// render(<Entry
//   customs={customs}
//   data={data}
//   formater={formater}
// />, document.getElementById('root'))

render(<Card align="justify" data={cardData} />, document.getElementById('root'))
