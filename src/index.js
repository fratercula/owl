import React from 'react'
import parser from './parser'

export default function ({
  formater = {},
  data = {},
  customs = {},
  className = 'react-owl',
}) {
  const P = parser(formater, customs, className)
  return (<P {...data} />)
}
