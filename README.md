# owl

[![Build Status](https://travis-ci.org/fratercula/owl.svg?branch=master)](https://travis-ci.org/fratercula/owl)
[![codecov](https://codecov.io/gh/fratercula/owl/branch/master/graph/badge.svg)](https://codecov.io/gh/fratercula/owl)

React layout interpreter

See the [demo](https://fratercula.github.io/owl/)

## Install

via NPM

```bash
$ npm i @fratercula/owl -S
```

## Usage

```js
import { Card, Cell } from '@@fratercula/ow'
```

### CARD

```js
const customs = {
  checkbox({ props, onChange, value, label }) {
    return ...
  },
}

const data = [
  [
    {
      value: 'Card Info',
      props: {
        style: {
          color: '#000',
        },
      },
      margin: [10, 23, 4, 5],
    },
  ],
  [
    {
      type: 'link',
      label: 'Number',
      props: {
        href: '/ccc/ddd/',
      },
      value: '1712737182731283',
      justify: 'flex-end',
    },
    {
      label: {
        text: 'Amount',
        style: {
          color: 'red',
        },
        colon: ' : ',
      },
      value: '$345',
    },
  ],
]

<Card
  customs={customs}
  data={data}
  lableStyle={{ marginTop: 10 }}
  lableColon=" - "
  cellMargin={[2, 3]}
  cellJustify="space-between"
  onChange={(type, value) => console.log(type, value)}
/>
```

## License

MIT
