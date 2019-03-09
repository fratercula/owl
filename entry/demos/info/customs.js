/* eslint react/prop-types: 0, import/no-unresolved: 0 */

import React from 'react'
import { Checkbox } from 'antd'

export const checkbox = ({ props, onChange }) => {
  const { checked } = props
  return (
    <Checkbox
      checked={checked}
      onChange={e => onChange(e.target.checked)}
    >
      This a Checkbox
    </Checkbox>
  )
}
