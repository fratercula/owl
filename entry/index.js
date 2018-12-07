import React from 'react'
import { render } from 'react-dom'
import Entry from '../src'
import { data, formater } from './data'

render(<Entry data={data} formater={formater} />, document.getElementById('root'))
