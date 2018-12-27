import React from 'react'
import { render } from 'react-dom'
import User from './user'
import '../src/index.less'

render((
  <div style={{ padding: 30, boxSizing: 'border-box', width: '100%' }}>
    <User />
  </div>
), document.getElementById('root'))
