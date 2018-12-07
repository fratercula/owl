import React from 'react'

class A {
  constructor() {
    this.a = 1
  }

  state = {}

  async test() {
    let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }
    return { ...this }
  }
}

export default function () {
  const a = { t: 1 }
  const b = { ...a }

  return (
    <div>??</div>
  )
}
