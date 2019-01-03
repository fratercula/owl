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
  const { label, cellMargin, cellJustify } = options

  return (
    <div className={`owl-card ${css.card}`}>
      {
        data.map((group, i) => (
          <div key={i} className={`owl-card-group ${css.group}`}>
            {
              group.map((item, j) => (
                <Section
                  key={j}
                  margin={cellMargin}
                  justify={cellJustify}
                  labelOption={label}
                  {...item}
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
