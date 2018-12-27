import React from 'react'
import { Button } from 'antd'
import { Cell } from '../../../../src'
import formater from './formater'

const customs = {
  button() {
    return (<Button icon="eye" type="primary">查看详情</Button>)
  },
}

export default function () {
  return (
    <div className="refund-c5">
      <Cell customs={customs} formater={formater} />
    </div>
  )
}
