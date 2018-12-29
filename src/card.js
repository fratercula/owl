import React from 'react'
import PropTypes from 'prop-types'
import Section from './section'
import css from './card.less'

function Card({ data, align, customs }) {
  return (
    <div className="owl-card">
      {
        data.map((group, i) => (
          <div key={i} className={`owl-card-group ${css.group}`}>
            {
              group.map((item, j) => (
                <Section
                  key={j}
                  align={align}
                  {...item}
                  customs={customs}
                />
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
  align: PropTypes.number,
  customs: PropTypes.object,
}

Card.defaultProps = {
  data: [],
  align: 0,
  customs: {},
}

export default Card
