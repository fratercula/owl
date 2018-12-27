import React from 'react'
import PropTypes from 'prop-types'
import parser from './parser'

function Cell({ formater, data, customs }) {
  const P = parser(formater)
  return (<P data={data} customs={customs} />)
}

Cell.propTypes = {
  formater: PropTypes.array,
  data: PropTypes.object,
  customs: PropTypes.object,
}

Cell.defaultProps = {
  formater: [],
  data: {},
  customs: {},
}

export default Cell
