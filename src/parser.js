import React from 'react'

export default function ({ align, rules = [] }, customs) {
  return data => rules.map((blocks, i) => (
    <div
      className="react-owl"
      key={i}
      style={align !== 'vertical' ? { display: 'inline-block' } : null}
    >
      {
        blocks.map((block, j) => {
          const item = typeof block === 'string'
            ? { type: 'string', key: block }
            : block

          const { key, type, props = {} } = item
          const text = data[key]
          const C = customs[type]

          if (!key || !text) {
            return null
          }

          Object.keys(props).forEach((p) => {
            if (typeof props[p] === 'string' && props[p].includes('key:')) {
              // eslint-disable-next-line no-param-reassign
              props[p] = data[props[p].split('key:')[1]]
            }
          })

          let child = null

          if (type === 'string') {
            child = (
              <span {...props}>{text}</span>
            )
          }

          if (type === 'image') {
            child = (
              <img src={text} {...props} />
            )
          }

          if (type === 'link') {
            child = (
              <a {...props}>{text}</a>
            )
          }

          if (C) {
            child = (
              <C text={text} props={props} />
            )
          }

          return (
            <div key={j} className="react-owl-unit" style={{ display: 'inline-block' }}>
              {child}
            </div>
          )
        })
      }
    </div>
  ))
}
