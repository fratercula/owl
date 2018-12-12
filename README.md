# owl

React layout interpreter

## Install

via NPM

```bash
$ npm i @fratercula/owl -S
```

## Usage

basic

```js
import Owl from '@fratercula/owl'

const formater = {
  align: 'vertical',
  rules: [
    [
      'time',
      {
        type: 'link',
        key: 'title',
        props: {
          href: 'key:url',
        },
      },
    ],
    [
      {
        type: 'image',
        key: 'src',
        props: {
          width: 100,
        },
      },
    ],
  ],
}

const data = {
  time: '2018-18-19 12:23:34',
  url: '/ore/s',
  src: '/path/to/image',
  title: 'table',
}

ReactDOM.render(<Owl data={data} formater={formater} />, node)

/*
** result

<div class="react-owl">
  <div class="react-owl-cell" style="display: inline-block;">
    <span>2018-18-19 12:23:34</span>
  </div>
  <div class="react-owl-cell" style="display: inline-block;">
    <a href="/ore/s" target="_blank">table</a>
  </div>
</div>
<div class="react-owl">
  <div class="react-owl-cell" style="display: inline-block;">
    <img src="/path/to/image" width="100">
  </div>
</div>

*/
```

align

```js
import Owl from '@fratercula/owl'

const formater = {
  align: 'horizontal',
  rules: [
    ['time'],
  ],
}

const data = {
  time: '2018-18-19 12:23:34',
}

ReactDOM.render(<Owl data={data} formater={formater} />, node)

/*
** result

<div class="react-owl" style="display: inline-block;">
  <div class="react-owl-cell" style="display: inline-block;">
    <span>2018-18-19 12:23:34</span>
  </div>
</div>

*/
```

className

```js
import Owl from '@fratercula/owl'

const formater = {
  align: 'horizontal',
  rules: [
    ['time'],
  ],
}

const data = {
  time: '2018-18-19 12:23:34',
}

ReactDOM.render(<Owl data={data} formater={formater} className="lwo" />, node)

/*
** result

<div class="lwo" style="display: inline-block;">
  <div class="lwo-cell" style="display: inline-block;">
    <span>2018-18-19 12:23:34</span>
  </div>
</div>

*/
```

customs

```js
import Owl from '@fratercula/owl'
import Tag from 'antd/lib/tag'

const formater = {
  align: 'vertical',
  rules: [
    [
      {
        type: 'tag',
        key: 'time',
        props: {
          color: '#f50',
        },
      },
    ],
  ],
}

const data = {
  time: '2018-18-19 12:23:34',
}

const customs = {
  tag({ text, props }) {
    return (
      <Tag {...props}>{text}</Tag>
    )
  },
}

ReactDOM.render(<Owl customs={customs} data={data} formater={formater} />, node)

/*
** result

<div class="react-owl">
  <div class="react-owl-cell" style="display: inline-block;">
    <div data-show="true" class="ant-tag ant-tag-has-color" style="background-color: rgb(255, 85, 0);">2018-18-19 12:23:34</div>
  </div>
</div>

*/
```

## License

MIT
