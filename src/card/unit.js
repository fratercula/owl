import React from 'react' // eslint-disable-line import/no-unresolved
import PropTypes from 'prop-types'
import css from './card.less'

function Section({
  type,
  label,
  value,
  props,
  components,
  margin,
  justify,
  labelStyle,
  labelColon,
  onEvent,
}) {
  const text = label.text || label
  const style = label.style
    ? { ...labelStyle, ...label.style }
    : labelStyle
  const colon = label.colon || labelColon
  const C = components[type]

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
      <img className="owl-card-image" {...props} />
    )
  }

  if (type === 'link') {
    child = (
      <a className="owl-card-link" {...props}>{value}</a>
    )
  }

  if (C) {
    child = (
      <C
        label={text}
        props={props}
        value={value}
        onEvent={e => onEvent(type, e)}
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
            <div className={`owl-card-label ${css.label}`}>
              <span style={style}>{text}</span>
              <span className="owl-card-colon">{colon}</span>
            </div>
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
  components: PropTypes.object,
  props: PropTypes.object,
  margin: PropTypes.array,
  justify: PropTypes.string,
  labelStyle: PropTypes.object,
  labelColon: PropTypes.string,
  onEvent: PropTypes.func,
}

Section.defaultProps = {
  type: 'string',
  label: '',
  value: '',
  components: {},
  props: {},
  margin: [],
  labelStyle: {},
  labelColon: ' : ',
  justify: 'normal',
  onEvent: () => null,
}

export default Section
