import React from 'react'
import PropTypes from 'prop-types'

function Unit({ type, label, value }) {
  if (type === 'string') {
    return (
      <div className="card-unit">
        {
          label
            ? (<span className="card-unit-label">{label}:</span>)
            : null
        }
        {
          value
            ? (<span>{value}</span>)
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
}

Unit.defaultProps = {
  type: 'string',
  label: '',
  value: '',
}

export default Unit
