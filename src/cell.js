import React from 'react'
import PropTypes from 'prop-types'
import interpreter from './interpreter'

function Cell({
  formater,
  data,
  customs,
  onChange,
}) {
  const I = interpreter(formater)
  return (<I data={data} onChange={onChange} customs={customs} />)
}

Cell.propTypes = {
  onChange: PropTypes.func,
  formater: PropTypes.array,
  data: PropTypes.object,
  customs: PropTypes.object,
}

Cell.defaultProps = {
  onChange: () => null,
  formater: [],
  data: {},
  customs: {},
}

export default Cell
