/* eslint no-param-reassign: 0 */

import React from 'react'
import { Table } from 'antd'
import { Cell } from '../../src'

export default function ({ value, props }) {
  const { columns, dataSource } = value

  columns.forEach((column, i) => {
    const { formater: fr } = column
    column.dataIndex = typeof fr === 'string' ? fr : i
    if (typeof fr === 'object') {
      column.render = (cell, record) => (
        <Cell formater={fr} data={record} />
      )
    }
  })

  return (
    <Table
      rowKey={(r, i) => i}
      dataSource={dataSource}
      columns={columns}
      {...props}
    />
  )
}
