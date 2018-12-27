/* eslint react/prop-types: 0 */

import React from 'react'
import { Icon, Tag } from 'antd'
import { Cell } from '../../../src'
import data from '../data'
import formater from './formater'

const customs = {
  tag({ props }) {
    const { text } = props
    return (
      <Tag color="#f50">{text}</Tag>
    )
  },
  flag() {
    return (<Icon style={{ position: 'absolute', right: 15, top: 13 }} type="flag" />)
  },
}

export default function () {
  return (
    <div style={{ position: 'relative' }} className="refund-bottom">
      <Cell customs={customs} formater={formater} data={data} />
    </div>
  )
}
