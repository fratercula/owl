import React from 'react'
import PropTypes from 'prop-types'

function Link({ text, props }) {
  return (
    <a {...props}>{text}</a>
  )
}

Link.propTypes = {
  text: PropTypes.string,
  props: PropTypes.object,
}

Link.defaultProps = {
  text: '',
  props: {},
}

export default Link
