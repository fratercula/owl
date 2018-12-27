import React from 'react'
import { Cell } from '../../src'
import { main } from './formater'
import { lv0 } from './customs'
import './index.less'

export default function () {
  return (
    <div className="user">
      <Cell customs={{ lv0 }} formater={main} />
    </div>
  )
}
