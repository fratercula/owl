import React from 'react' // eslint-disable-line
import { Card } from '../../../src'
import data from './data'
import * as components from './component'

export default function () {
  const options = {
    labelColon: ' :: ',
    cellJustify: 'space-between',
    labelStyle: {
      marginLeft: 20,
    },
    cellMargin: [20, 40],
  }

  return (
    <div style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, .1)' }}>
      <Card
        data={data}
        components={components}
        onEvent={(...args) => console.log(args)}
        {...options}
      />
    </div>
  )
}
