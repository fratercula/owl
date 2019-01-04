import React from 'react'
import tableData from './data'
import Table from './customs'

export default function () {
  return (
    <Table
      value={tableData}
      props={{
        pagination: false,
        bordered: true,
      }}
    />
  )
}
