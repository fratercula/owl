import React from 'react'

export default function ({ align, rules = [] }, customs) {
  return data => rules.map((blocks, i) => (
    <div
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

          if (!key || !text) {
            return null
          }

          Object.keys(props).forEach((p) => {
            if (typeof props[p] === 'string' && props[p].includes('key:')) {
              // eslint-disable-next-line no-param-reassign
              props[p] = data[props[p].split('key:')[1]]
            }
          })

          if (type === 'string') {
            return (
              <span key={j} {...props}>{text}</span>
            )
          }

          if (type === 'image') {
            return (
              <img key={j} src={text} {...props} />
            )
          }

          if (type === 'link') {
            return (
              <a key={j} {...props}>{text}</a>
            )
          }

          const C = customs[type]

          if (C) {
            return <C key={j} text={text} props={props} />
          }

          return null
        })
      }
    </div>
  ))
}
