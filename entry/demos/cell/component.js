/* eslint react/prop-types: 0, import/no-unresolved: 0 */
import React from 'react'
import { Checkbox } from 'antd'

export const checkbox = ({ props, onEvent }) => {
  const { checked } = props
  return (
    <Checkbox
      defaultChecked={checked}
      onChange={e => onEvent(e.target.checked)}
    />
  )
}
