import React from 'react'
import { Cell } from '../../../../src'
import data from '../../data'
import formater from './formater'

export default function () {
  return (
    <div className="refund-c4">
      <Cell formater={formater} data={data} />
    </div>
  )
}
