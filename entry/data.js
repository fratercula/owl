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
          style: {
            marginLeft: 5,
          },
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

export const data = {
  title: 'table',
  nick: 'nick',
  time: '2018-18-19 12:23:34',
  url: '/ore/s',
  src: 'https://img.alicdn.com/tfs/TB1D0RRdCzqK1RjSZFHXXb3CpXa-384-92.png',
  content: 'this is the content',
}
