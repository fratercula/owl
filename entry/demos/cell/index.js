import React from 'react' // eslint-disable-line
import { Cell } from '../../../src'
import data from './data'
import format from './format'
import * as componets from './component'

export default function () {
  return (
    <Cell
      format={format}
      components={componets}
      data={data}
      onEvent={(...args) => console.log(args)}
      gap={{ column: 30, row: 20 }}
    />
  )
}
