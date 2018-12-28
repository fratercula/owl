import React from 'react'
import { Card } from '../../src'
import tableData from './data'
import table from './customs'

const data = [
  [
    {
      type: 'table',
      value: tableData,
      props: {
        pagination: false,
        bordered: true,
      },
    },
  ],
]

export default function () {
  return (
    <div style={{ marginLeft: 30 }}>
      <Card data={data} customs={{ table }} />
    </div>
  )
}
