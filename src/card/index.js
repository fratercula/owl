import React from 'react' // eslint-disable-line import/no-unresolved
import PropTypes from 'prop-types'
import Unit from './unit'
import css from './card.less'

function Card({
  data,
  components,
  onEvent,
  labelStyle,
  labelColon,
  cellJustify,
  cellMargin,
}) {
  return (
    <div className="owl-card">
      {
        data.map((group, i) => (
          <div key={i} className={`owl-card-group ${css.group}`}>
            {
              group.map((item, j) => (
                <Unit
                  key={j}
                  margin={cellMargin}
                  justify={cellJustify}
                  {...item}
                  labelStyle={labelStyle}
                  labelColon={labelColon}
                  components={components}
                  onEvent={onEvent}
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
  components: PropTypes.object,
  onEvent: PropTypes.func,
  labelStyle: PropTypes.object,
  cellJustify: PropTypes.string,
  cellMargin: PropTypes.array,
  labelColon: PropTypes.string,
}

Card.defaultProps = {
  data: [],
  components: {},
  onEvent: () => null,
  cellJustify: 'normal',
  labelStyle: {},
  cellMargin: [],
  labelColon: ' : ',
}

export default Card
