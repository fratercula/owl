export const formater = {
  align: 'vertical',
  rules: [
    [
      {
        type: 'string',
        key: 'nick',
        props: {
          style: {
            color: 'red',
          },
        },
      },
      'time',
      {
        type: 'link',
        key: 'title',
        props: {
          href: 'key:url',
          target: '_blank',
        },
      },
    ],
    [
      'content',
      {
        type: 'image',
        key: 'src',
        props: {
          width: 100,
        },
      },
    ],
    [
      {
        type: 'tag',
        key: 'nick',
        props: {
          color: '#f50',
        },
      },
    ],
  ],
}

export const cellData = {
  title: 'table',
  nick: 'nick',
  time: '2018-18-19 12:23:34',
  url: '/ore/s',
  src: 'https://img.alicdn.com/tfs/TB1D0RRdCzqK1RjSZFHXXb3CpXa-384-92.png',
  content: 'this is the content',
}

export const cardData = [
  [
    {},
    {
      label: '订单编号',
      value: '20180912123045',
    },
    {
      label: '时间',
      value: '2018-09-12 12:30:45',
    },
  ],
  [
    {
      label: '金额',
      value: 'V-T To justify printed text means to adjust the spaces between the words so that each line of type is exactly the same length. 使 (文本) 对齐',
    },
    {},
    {
      value: '一个商品',
    },
  ],
  [
    {
      label: '金额',
      align: 100,
      value: '2018-09-12 12:30:45',
    },
    {
      label: '商品',
      value: '一个商品',
    },
  ],
  [
    {
      value: 'aksdj4',
    },
    {
      type: 'tag',
      label: 'tag',
      value: 'nick',
    },
  ],
]
