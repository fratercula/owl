import React from 'react'
import { Cell } from '../../../src'
import data from '../data'
import formater from './formater'
import C1 from './c1'
import C2 from './c2'
import C3 from './c3'
import C4 from './c4'
import C5 from './c5'

const customs = {
  c1() {
    return (<C1 />)
  },
  c2() {
    return (<C2 />)
  },
  c3() {
    return (<C3 />)
  },
  c4() {
    return (<C4 />)
  },
  c5() {
    return (<C5 />)
  },
}

export default function () {
  return (
    <div className="refund-center">
      <Cell customs={customs} formater={formater} data={data} />
    </div>
  )
}
