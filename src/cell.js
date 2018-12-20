import React from 'react'
import parser from './parser'

export default function ({
  formater = {},
  data = {},
  customs = {},
}) {
  const P = parser(formater, customs)
  return (<P {...data} />)
}
