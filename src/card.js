import React from 'react'
import PropTypes from 'prop-types'
import Unit from './unit'

function Card({ data, column }) {
  if (column === 0) {
    return null
  }

  return (
    <div className="card">
      {
        data.map((item, i) => (<Unit key={i} {...item} />))
      }
    </div>
  )
}

Card.propTypes = {
  column: PropTypes.number,
  data: PropTypes.array,
}

Card.defaultProps = {
  column: 1,
  data: [],
}

export default Card
