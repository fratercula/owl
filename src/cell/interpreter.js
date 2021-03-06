import React from 'react' // eslint-disable-line import/no-unresolved
import css from './cell.less'

export default function (format) {
  return ({
    data,
    components,
    onEvent,
    gap,
  }) => format.map((blocks, i) => {
    const { row, column } = gap

    return (
      <div
        className={`owl-cell ${css.cell}`}
        key={i}
        style={row && i < blocks.length - 1 ? { marginBottom: row } : null}
      >
        {
          blocks.map((block, j) => {
            const item = typeof block === 'string' ? { key: block } : block
            const {
              key,
              type = 'string',
              props: originProps = {},
              prefix = '',
              suffix = '',
              style = {},
            } = item
            const text = data[key]
            const props = JSON.parse(JSON.stringify(originProps))
            const C = components[type]

            if (!key && !type) {
              return null
            }

            Object.keys(props).forEach((p) => {
              if (typeof props[p] === 'string' && props[p].match(/^:.{1,}/)) {
                // eslint-disable-next-line no-param-reassign
                props[p] = data[props[p].split(':')[1]]
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
                <img {...props} />
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
                  onEvent={e => onEvent(type, e)}
                  props={props}
                />
              )
            }

            return (
              <div
                key={j}
                className={`owl-cell-unit ${css.unit}`}
                style={{
                  marginRight: column && j < blocks.length - 1 ? column : null,
                  ...style,
                }}
              >
                {
                  prefix
                    ? <span className={`owl-cell-prefix ${css.prefix}`}>{prefix}</span>
                    : null
                }
                {child}
                {
                  suffix
                    ? <span className={`owl-cell-suffix ${css.suffix}`}>{suffix}</span>
                    : null
                }
              </div>
            )
          })
        }
      </div>
    )
  })
}
