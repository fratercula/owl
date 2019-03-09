import React from 'react' // eslint-disable-line import/no-unresolved
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
  labelStyle,
  labelColon,
  onChange,
}) {
  const text = label.text || label
  const style = label.style || labelStyle
  const colon = label.colon || labelColon
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

  if (type === 'image') {
    child = (
      <img className={`owl-card-image ${css.image}`} src={value} {...props} />
    )
  }

  if (type === 'link') {
    child = (
      <a className={`owl-card-link ${css.link}`} {...props}>{value}</a>
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
  labelStyle: PropTypes.object,
  labelColon: PropTypes.string,
  onChange: PropTypes.func,
}

Section.defaultProps = {
  type: 'string',
  label: '',
  value: '',
  customs: {},
  props: {},
  margin: [],
  labelStyle: {},
  labelColon: ' : ',
  justify: 'normal',
  onChange: () => null,
}

export default Section
