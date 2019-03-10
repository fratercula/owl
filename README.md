# owl

[![Build Status](https://travis-ci.org/fratercula/owl.svg?branch=master)](https://travis-ci.org/fratercula/owl)
[![codecov](https://codecov.io/gh/fratercula/owl/branch/master/graph/badge.svg)](https://codecov.io/gh/fratercula/owl)

React layout interpreter [demo](https://fratercula.github.io/owl/)

## Install

```bash
$ npm i @fratercula/owl
```

## Usage

```js
import { Card, Cell } from '@@fratercula/owl'
```

### Card

```js
const components = {
  checkbox({ props, onEvent, value, label }) {
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
  components={components}
  data={data}
  lableStyle={{ marginTop: 10 }}
  lableColon=" - "
  cellMargin={[2, 3]}
  cellJustify="space-between"
  onEvent={(type, value) => console.log(type, value)}
/>
```

### Cell

```js
const components = {
  checkbox({ text, props, onEvent }) {
    return ...
  },
}
const data = {
  city: 'city',
  checked: true,
  name: 'name',
  src: 'https://tempim-1256796114.cos-website.ap-shanghai.myqcloud.com/placeholder/70x70',
}
const format = [
  [
    {
      type: 'checkbox',
      props: {
        checked: ':checked',
      },
    },
    'name',
    {
      type: 'link',
      key: 'city',
      props: {
        href: ':src',
      },
      style: {
        marginTop: 50,
      },
    },
  ],
  [
    {
      key: 'city',
      prefix: '??? ',
      props: {
        style: {
          color: 'red',
        },
      },
    },
    {
      type: 'image',
      props: {
        src: ':src',
      },
      suffix: '----',
    },
  ],
]

<Cell
  format={format}
  components={componets}
  data={data}
  onEvent={(...args) => console.log(args)}
  gap={{ column: 30, row: 20 }}
/>
```

## License

MIT
