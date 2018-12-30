import React from 'react'
import PropTypes from 'prop-types'
import Section from './section'
import css from './card.less'

function Card({ data, options, customs }) {
  return (
    <div className="owl-card">
      {
        data.map((group, i) => (
          <div key={i} className={`owl-card-group ${css.group}`}>
            {
              group.map((item, j) => (
                <Section
                  key={j}
                  mainOptions={options}
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
  options: PropTypes.object,
  customs: PropTypes.object,
}

Card.defaultProps = {
  data: [],
  options: {},
  customs: {},
}

export default Card
