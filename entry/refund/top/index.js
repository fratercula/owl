/* eslint react/prop-types: 0 */

import React from 'react'
import { Icon } from 'antd'
import { Cell } from '../../../src'
import data from '../data'
import formater from './formater'

const customs = {
  icon({ props }) {
    const { type } = props
    return (
      <Icon type={type} />
    )
  },
}

export default function () {
  return (
    <div className="refund-top">
      <Cell customs={customs} formater={formater} data={data} />
    </div>
  )
}
