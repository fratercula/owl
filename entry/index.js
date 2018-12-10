import React from 'react'
import { render } from 'react-dom'
import Tag from 'antd/lib/tag'
import Entry from '../src'
import { data, formater } from './data'

import '../src/index.less'

const customs = {
  tag({ text, props }) {
    return (
      <Tag {...props}>{text}</Tag>
    )
  },
}

render(<Entry
  customs={customs}
  data={data}
  formater={formater}
/>, document.getElementById('root'))
