import React from 'react'
import PropTypes from 'prop-types'
import css from './card.less'

function Section({
  type,
  label,
  value,
  props,
  customs,
  margin,
  justify,
  labelOption,
  onChange,
}) {
  const text = typeof label === 'string' ? label : label.text
  const options = typeof label === 'string' ? {} : label
  const { style = {}, colon = ' : ' } = { ...labelOption, ...options }
  const C = customs[type]

  let child = value && type === 'string'
    ? (
      <span {...props} className={`owl-card-value ${css.value}`}>{value}</span>
    )
    : null

  if (type === 'line') {
    child = (
      <span {...props} className={`owl-card-line ${css.line}`} />
    )
  }

  if (type === 'space') {
    child = (
      <span {...props} className={`owl-card-space ${css.space}`} />
    )
  }

  if (C) {
    child = (
      <C
        label={text}
        props={props}
        value={value}
        onChange={e => onChange(type, e)}
      />
    )
  }

  return (
    <div
      style={{
        margin: margin.map(s => `${s}px`).join(' '),
        justifyContent: justify,
      }}
      className={`owl-card-unit ${css.unit}`}
    >
      {
        text
          ? (
            <span
              style={style}
              className={`owl-card-label ${css.label}`}
            >
              {text}{colon}
            </span>
          )
          : null
      }
      {child}
    </div>
  )
}

Section.propTypes = {
  type: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  value: PropTypes.any,
  customs: PropTypes.object,
  props: PropTypes.object,
  margin: PropTypes.array,
  justify: PropTypes.string,
  labelOption: PropTypes.object,
  onChange: PropTypes.func,
}

Section.defaultProps = {
  type: 'string',
  label: '',
  value: '',
  customs: {},
  props: {},
  margin: [],
  labelOption: {},
  justify: undefined,
  onChange: () => null,
}

export default Section
