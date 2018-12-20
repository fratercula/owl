# owl

[![Build Status](https://travis-ci.org/fratercula/owl.svg?branch=master)](https://travis-ci.org/fratercula/owl)
[![codecov](https://codecov.io/gh/fratercula/owl/branch/master/graph/badge.svg)](https://codecov.io/gh/fratercula/owl)

React layout interpreter

## Install

via NPM

```bash
$ npm i @fratercula/owl -S
```

## Usage

See the [demo](https://fratercula.github.io/owl/)

```js
import React from 'react'
import { render } from 'react-dom'
import { Tag, Table } from 'antd'
import { Card, Cell } from '@fratercula/owl'
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
```

## License

MIT
