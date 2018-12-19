import React from 'react'
import PropTypes from 'prop-types'
import Unit from './unit'

function Card({ data, align }) {
  return (
    <div className="react-owl-card">
      {
        data.map((group, i) => (
          <div key={i} className="react-owl-card-group">
            {
              group.map((item, j) => (
                <Unit key={j} align={align} {...item} />
              ))
            }
          </div>
        ))
      }
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.array,
  align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Card.defaultProps = {
  data: [],
  align: 0,
}

export default Card
