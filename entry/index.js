/* eslint no-param-reassign: 0 */

import React from 'react'
import { render } from 'react-dom'
import Tag from 'antd/lib/tag'
import Table from 'antd/lib/table'
import { Cell, Card } from '../src'
import { cellData, cardData, formater } from './data'
import '../src/index.less'

const cellCustoms = {
  tag({ text, props }) {
    return (
      <Tag {...props}>{text}</Tag>
    )
  },
}

const cardCustoms = {
  table({ value, props }) { // eslint-disable-line react/prop-types
    const { columns, dataSource } = value

    columns.forEach((column, i) => {
      const { formater: fr } = column
      column.dataIndex = typeof fr === 'string' ? fr : i
      if (typeof fr === 'object') {
        column.render = (cell, record) => (
          <Cell customs={cellCustoms} formater={fr} data={record} />
        )
      }
    })

    return (
      <Table
        rowKey={(record, i) => i}
        dataSource={dataSource}
        columns={columns}
        {...props}
      />
    )
  },
}

function Entry() {
  return (
    <div>
      <Cell customs={cellCustoms} data={cellData} formater={formater} />
      <Card customs={cardCustoms} align="justify" data={cardData} />
    </div>
  )
}

render(<Entry />, document.getElementById('root'))
