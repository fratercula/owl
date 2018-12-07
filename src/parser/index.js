import React from 'react'
import Link from './link'

export default function ({ align, rules }) {
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

          const c = { link: Link }
          const C = c[type]

          if (C) {
            return <C key={j} text={text} props={props} />
          }

          return null
        })
      }
    </div>
  ))
}
