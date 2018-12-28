import React from 'react'

export default function (formater) {
  return ({ data, customs, onChange }) => formater.map((blocks, i) => (
    <div
      className="react-owl-cell"
      key={i}
    >
      {
        blocks.map((block, j) => {
          const item = typeof block === 'string' ? { key: block } : block
          const {
            key,
            type = 'string',
            props: originProps = {},
            prefix = '',
            postfix = '',
            style = {},
          } = item
          const text = data[key]
          const props = JSON.parse(JSON.stringify(originProps))
          const C = customs[type]

          if (!key && !type) {
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
              <C
                text={text}
                onChange={e => onChange(type, e)}
                props={props}
              />
            )
          }

          return (
            <div
              key={j}
              className="react-owl-cell-unit"
              style={{
                display: 'inline-block',
                ...style,
              }}
            >
              {prefix}
              {child}
              {postfix}
            </div>
          )
        })
      }
    </div>
  ))
}
