/* eslint react/prop-types: 0, import/no-unresolved: 0 */

import React from 'react'
import { Input } from 'antd'

export const input = ({ props, onEvent }) => (
  <Input
    {...props}
    onChange={e => onEvent(e.target.value, '???')}
  />
)
