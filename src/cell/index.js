import React from 'react' // eslint-disable-line import/no-unresolved
import PropTypes from 'prop-types'
import interpreter from './interpreter'

function Cell({
  formater,
  data,
  components,
  gap,
  onEvent,
}) {
  const I = interpreter(formater)
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
  formater: PropTypes.array,
  data: PropTypes.object,
  components: PropTypes.object,
  gap: PropTypes.object,
}

Cell.defaultProps = {
  onEvent: () => null,
  formater: [],
  data: {},
  components: {},
  gap: {},
}

export default Cell
