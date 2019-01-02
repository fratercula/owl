import React from 'react'
import PropTypes from 'prop-types'
import Section from './section'
import css from './card.less'

function Card({
  data,
  options,
  customs,
  onChange,
}) {
  return (
    <div className="owl-card">
      {
        data.map((group, i) => (
          <div key={i} className={`owl-card-group ${css.group}`}>
            {
              group.map((item, j) => (
                <Section
                  key={j}
                  {...item}
                  options={options}
                  customs={customs}
                  onChange={onChange}
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
  onChange: PropTypes.func,
}

Card.defaultProps = {
  data: [],
  options: {},
  customs: {},
  onChange: () => null,
}

export default Card
