/* eslint react/prop-types: 0 */

import React from 'react'
import { Icon, Button, Tag } from 'antd'
import { Cell } from '../../src'
import data from './data'
import { f01, f0 } from './formater'

export const icon = ({ props }) => {
  const { icons } = props
  return icons.map(type => (
    <Icon type={type} />
  ))
}

export const button = () => (<Button type="primary">Follow</Button>)

export const tags = ({ props }) => {
  const { expertise } = props
  return expertise.map(e => (
    <Tag>{e}</Tag>
  ))
}

export const name = () => (<Cell formater={f01} data={data} />)

export const lv0 = () => (
  <div className="lv0">
    <Cell customs={{ name, button }} formater={f0} data={data} />
  </div>
)
