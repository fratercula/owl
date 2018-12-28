import React from 'react'
import { render } from 'react-dom'
import Card from './card'
import '../src/index.less'

render((
  <div style={{ padding: 30, boxSizing: 'border-box', width: '100%' }}>
    <Card />
  </div>
), document.getElementById('root'))
