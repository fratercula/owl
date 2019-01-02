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
  options,
  onChange,
}) {
  const labelOptions = typeof label === 'string' ? {} : {
    labelWidth: label.width,
    labelColor: label.color,
    labelColon: label.colon,
    labelMarginRight: label.marginRight,
  }
  const {
    labelWidth,
    labelColor,
    labelMarginRight,
    labelColon = ' : ',
  } = { ...options, ...labelOptions }
  const cellMargin = margin || options.cellMargin
  const text = typeof label === 'string' ? label : label.text

  const labelStyle = {}
  const unitStyle = {}
  const C = customs[type]

  if (labelWidth > 0) {
    labelStyle.width = labelWidth
  }
  if (labelWidth === 0) {
    unitStyle.justifyContent = 'space-between'
  }
  if (labelColor) {
    labelStyle.color = labelColor
  }
  if (cellMargin.length) {
    unitStyle.margin = cellMargin.map(s => `${s}px`).join(' ')
  }
  if (labelMarginRight) {
    labelStyle.marginRight = labelMarginRight
  }

  let child = value && type === 'string'
    ? (
      <span className={`owl-card-value ${css.value}`}>{value}</span>
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
    <div style={unitStyle} className={`owl-card-unit ${css.unit}`}>
      {
        text
          ? (
            <span
              style={labelStyle}
              className={`owl-card-label ${css.label}`}
            >
              {text}{labelColon}
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
  options: PropTypes.object,
  onChange: PropTypes.func,
}

Section.defaultProps = {
  type: 'string',
  label: '',
  value: '',
  customs: {},
  props: {},
  margin: [],
  options: {},
  onChange: () => null,
}

export default Section
