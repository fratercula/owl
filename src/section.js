import React from 'react'
import PropTypes from 'prop-types'
import css from './card.less'

function Section({
  type,
  label,
  value,
  props,
  customs,
  options: cellOptions,
  mainOptions,
}) {
  const options = { ...mainOptions, ...cellOptions }
  const {
    labelWidth,
    labelColor,
    colon = ' : ',
    cellMargin,
    labelMarginRight,
  } = options

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
  if (cellMargin) {
    unitStyle.margin = typeof cellMargin === 'string'
      ? cellMargin
      : cellMargin.map(s => `${s}px`).join(' ')
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
    child = (<C label={label} props={props} value={value} />)
  }

  return (
    <div style={unitStyle} className={`owl-card-unit ${css.unit}`}>
      {
        label
          ? (
            <span
              style={labelStyle}
              className={`owl-card-label ${css.label}`}
            >
              {label}{colon}
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
  label: PropTypes.string,
  value: PropTypes.any,
  customs: PropTypes.object,
  props: PropTypes.object,
  options: PropTypes.object,
  mainOptions: PropTypes.object,
}

Section.defaultProps = {
  type: 'string',
  label: '',
  value: '',
  customs: {},
  props: {},
  options: {},
  mainOptions: {},
}

export default Section
