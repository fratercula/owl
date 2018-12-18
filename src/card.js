import React from 'react'
import PropTypes from 'prop-types'
import Unit from './unit'

function Card({ data }) {
  return (
    <div className="card">
      {
        data.map((group, i) => (
          <div key={i} className="card-group">
            {
              group.map((item, j) => (
                <Unit key={j} {...item} />
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
}

Card.defaultProps = {
  data: [],
}

export default Card
