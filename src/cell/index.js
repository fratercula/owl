import React from 'react' // eslint-disable-line import/no-unresolved
import PropTypes from 'prop-types'
import interpreter from './interpreter'

function Cell({
  format,
  data,
  components,
  gap,
  onEvent,
}) {
  const I = interpreter(format)
  return (
    <I
      data={data}
      onEvent={onEvent}
      components={components}
      gap={gap}
    />
  )
}

Cell.propTypes = {
  onEvent: PropTypes.func,
  format: PropTypes.array,
  data: PropTypes.object,
  components: PropTypes.object,
  gap: PropTypes.object,
}

Cell.defaultProps = {
  onEvent: () => null,
  format: [],
  data: {},
  components: {},
  gap: {},
}

export default Cell
