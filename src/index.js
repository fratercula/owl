import React from 'react'
import parser from './parser'

export default function ({ formater, data }) {
  const P = parser(formater)
  return (<P {...data} />)
}
