import React from 'react'
import { render } from 'react-dom'
import Refund from './refund'
import '../src/index.less'

render((
  <div style={{ padding: 30, boxSizing: 'border-box', width: '100%' }}>
    <Refund />
  </div>
), document.getElementById('root'))
