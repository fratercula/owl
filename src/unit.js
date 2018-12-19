import React from 'react'
import PropTypes from 'prop-types'

function Unit({
  type,
  label,
  value,
  align,
}) {
  const labelStyle = align > 0 ? { width: align } : null
  const unitStyle = align === 'justify'
    ? { 'justify-content': 'space-between' }
    : null

  if (type === 'string') {
    return (
      <div style={unitStyle} className="card-unit">
        {
          label
            ? (<span style={labelStyle} className="card-unit-label">{label}:</span>)
            : null
        }
        {
          value
            ? (<span className="card-unit-value">{value}</span>)
            : null
        }
      </div>
    )
  }

  return null
}

Unit.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Unit.defaultProps = {
  type: 'string',
  label: '',
  value: '',
  align: 0,
}

export default Unit
