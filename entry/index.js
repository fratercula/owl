import React from 'react'
import { render } from 'react-dom'
import Card from './card'
import Table from './table'
import '../src/index.less'

render((
  <div
    style={{
      padding: 30,
      boxSizing: 'border-box',
      width: '100%',
      display: 'flex',
    }}
  >
    <Card />
    <Table />
  </div>
), document.getElementById('root'))
