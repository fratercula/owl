/* eslint react/prop-types: 0, import/no-unresolved: 0 */

import React from 'react'
import {
  Icon,
  Button,
  Tag,
  Checkbox,
} from 'antd'
import { Cell } from '../../../src'
import {
  f01,
  f0,
  f1,
  f2,
} from './formater'

export const checkbox = ({ props, onEvent }) => {
  const { checked } = props
  return (
    <Checkbox
      style={{ position: 'absolute', right: 15, top: 10 }}
      checked={checked}
      onChange={e => onEvent(e.target.checked)}
    />
  )
}

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

export const button = ({ props }) => (
  <Button
    style={{ margin: '18px 0 0 70px' }}
    type="primary"
    disabled={props.disabled} // eslint-disable-line
  >
    Follow
  </Button>
)

export const tags = ({ props }) => {
  const { expertise } = props
  return expertise.map((e, i) => (
    <Tag key={i} style={{ margin: '8px 10px 0 0' }}>{e}</Tag>
  ))
}

export const name = ({ props }) => (<Cell format={f01} data={props} />)

export const lv0 = ({ props }) => (
  <div className="lv0">
    <Cell components={{ name, button }} format={f0} data={props} />
  </div>
)

export const lv1 = ({ props }) => (
  <div className="lv1">
    <Cell gap={{ row: 5, column: 20 }} format={f1} data={props} />
  </div>
)

export const lv2 = ({ props }) => (
  <div className="lv2">
    <Cell format={f2} data={props} components={{ tags }} />
  </div>
)
