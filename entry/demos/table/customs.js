/* eslint no-param-reassign: 0 */

import React from 'react'
import { Table, Tag } from 'antd'
import { Cell } from '../../../src'

const tags = ({ props }) => {
  const { tags: t } = props
  return t.map((e, i) => (
    <Tag key={i} style={{ margin: '3px 6px 0 0' }}>{e}</Tag>
  ))
}

export default function ({ value, props }) {
  const { columns, dataSource } = value

  columns.forEach((column, i) => {
    const { formater: fr } = column
    column.dataIndex = typeof fr === 'string' ? fr : i
    if (typeof fr === 'object') {
      column.render = (cell, record) => (
        <Cell customs={{ tags }} formater={fr} data={record} />
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
