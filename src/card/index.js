import React from 'react' // eslint-disable-line import/no-unresolved
import PropTypes from 'prop-types'
import Unit from './unit'
import css from './card.less'

function Card({
  data,
  customs,
  onChange,
  labelStyle,
  labelColon,
  cellJustify,
  cellMargin,
}) {
  return (
    <div className={`owl-card ${css.card}`}>
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
  customs: PropTypes.object,
  onChange: PropTypes.func,
  labelStyle: PropTypes.object,
  cellJustify: PropTypes.string,
  cellMargin: PropTypes.array,
  labelColon: PropTypes.string,
}

Card.defaultProps = {
  data: [],
  customs: {},
  onChange: () => null,
  cellJustify: 'normal',
  labelStyle: {},
  cellMargin: [],
  labelColon: ' : ',
}

export default Card
