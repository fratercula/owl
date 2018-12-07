import React from 'react'
import { render } from 'react-dom'
import Entry from '../src'

const test = { a: 1 }

render(<Entry {...test} />, document.getElementById('root'))
