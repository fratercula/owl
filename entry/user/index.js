import React from 'react'
import { Cell } from '../../src'
import { main } from './formater'
import {
  lv0,
  lv1,
  lv2,
  icon,
} from './customs'
import data from './data'
import './index.less'

export default function () {
  return (
    <div className="user">
      <Cell
        customs={{
          lv0,
          lv1,
          lv2,
          icon,
        }}
        formater={main}
        data={data}
      />
    </div>
  )
}
