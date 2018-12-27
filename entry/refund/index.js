import React from 'react'
import { Cell } from '../../src'
import Top from './top'
import Center from './center'
import Bottom from './bottom'
import formater from './formater'
import './index.less'

const customs = {
  top() {
    return (<Top />)
  },
  center() {
    return (<Center />)
  },
  bottom() {
    return (<Bottom />)
  },
}

export default function () {
  return (
    <Cell customs={customs} formater={formater} />
  )
}
