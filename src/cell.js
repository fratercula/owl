import React from 'react'
import PropTypes from 'prop-types'
import interpreter from './interpreter'

function Cell({
  formater,
  data,
  customs,
  options,
  onChange,
}) {
  const I = interpreter(formater)
  return (
    <I
      data={data}
      onChange={onChange}
      customs={customs}
      options={options}
    />
  )
}

Cell.propTypes = {
  onChange: PropTypes.func,
  formater: PropTypes.array,
  data: PropTypes.object,
  customs: PropTypes.object,
  options: PropTypes.object,
}

Cell.defaultProps = {
  onChange: () => null,
  formater: [],
  data: {},
  customs: {},
  options: {},
}

export default Cell
