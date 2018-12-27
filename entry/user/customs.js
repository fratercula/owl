/* eslint react/prop-types: 0 */

import React from 'react'
import { Icon, Button, Tag } from 'antd'
import { Cell } from '../../src'
import data from './data'
import {
  f01,
  f0,
  f1,
  f2,
} from './formater'

export const icon = ({ props }) => {
  const { icons } = props
  return (
    <div className="icons">
      {
        icons.map((type, i) => (
          <span key={i}>
            <Icon type={type} />
          </span>
        ))
      }
    </div>
  )
}

export const button = () => (<Button style={{ margin: '18px 0 0 70px' }} type="primary">Follow</Button>)

export const tags = ({ props }) => {
  const { expertise } = props
  return expertise.map((e, i) => (
    <Tag key={i} style={{ margin: '8px 10px 0 0' }}>{e}</Tag>
  ))
}

export const name = () => (<Cell formater={f01} data={data} />)

export const lv0 = () => (
  <div className="lv0">
    <Cell customs={{ name, button }} formater={f0} data={data} />
  </div>
)

export const lv1 = () => (
  <div className="lv1">
    <Cell formater={f1} data={data} />
  </div>
)

export const lv2 = () => (
  <div className="lv2">
    <Cell formater={f2} data={data} customs={{ tags }} />
  </div>
)
