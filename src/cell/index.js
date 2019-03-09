import React from 'react' // eslint-disable-line import/no-unresolved
import PropTypes from 'prop-types'
import interpreter from './interpreter'

function Cell({
  formater,
  data,
  customs,
  gap,
  onChange,
}) {
  const I = interpreter(formater)
  return (
    <I
      data={data}
      onChange={onChange}
      customs={customs}
      gap={gap}
    />
  )
}

Cell.propTypes = {
  onChange: PropTypes.func,
  formater: PropTypes.array,
  data: PropTypes.object,
  customs: PropTypes.object,
  gap: PropTypes.object,
}

Cell.defaultProps = {
  onChange: () => null,
  formater: [],
  data: {},
  customs: {},
  gap: {},
}

export default Cell
