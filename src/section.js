import React from 'react'
import PropTypes from 'prop-types'
import css from './card.less'

function Section({
  type,
  label,
  value,
  align,
  props,
  customs,
}) {
  const labelStyle = align > 0 ? { width: align } : null
  const unitStyle = align === 0 ? { justifyContent: 'space-between' } : null
  const C = customs[type]

  let child = value && type === 'string'
    ? (
      <span className={`owl-card-value ${css.value}`}>{value}</span>
    )
    : null

  if (type === 'line') {
    child = (<span {...props} className={`owl-card-line ${css.line}`} />)
  }

  if (type === 'space') {
    child = (<span {...props} className={`owl-card-space ${css.space}`} />)
  }

  if (C) {
    child = (<C label={label} props={props} value={value} />)
  }

  return (
    <div style={unitStyle} className={`owl-card-unit ${css.unit}`}>
      {
        label
          ? (
            <span
              style={labelStyle}
              className={`owl-card-label ${css.label}`}
            >
              {label}:
            </span>
          )
          : null
      }
      {child}
    </div>
  )
}

Section.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  align: PropTypes.number,
  customs: PropTypes.object,
  props: PropTypes.object,
}

Section.defaultProps = {
  type: 'string',
  label: '',
  value: '',
  align: 0,
  customs: {},
  props: {},
}

export default Section
