import React from 'react'
import PropTypes from 'prop-types'

function Unit({
  type,
  label,
  value,
  align,
  props,
  customs,
}) {
  const labelStyle = align > 0 ? { width: align } : null
  const unitStyle = align === 'justify'
    ? { justifyContent: 'space-between' }
    : null
  const C = customs[type]

  let child = value && type === 'string'
    ? (<span className="react-owl-card-unit-value">{value}</span>)
    : null

  if (type === 'line') {
    child = (<span {...props} className="react-owl-card-line" />)
  }

  if (type === 'space') {
    child = (<span {...props} className="react-owl-card-space" />)
  }

  if (C) {
    child = (<C label={label} props={props} value={value} />)
  }

  return (
    <div style={unitStyle} className="react-owl-card-unit">
      {
        label
          ? (<span style={labelStyle} className="react-owl-card-unit-label">{label}:</span>)
          : null
      }
      {child}
    </div>
  )
}

Unit.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  customs: PropTypes.object,
  props: PropTypes.object,
}

Unit.defaultProps = {
  type: 'string',
  label: '',
  value: '',
  align: 0,
  customs: {},
  props: {},
}

export default Unit
