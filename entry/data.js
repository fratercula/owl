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
        type: '?',
        key: 'nick',
      },
    ],
  ],
}

export const data = {
  title: 'table',
  nick: 'nick',
  time: '2018-18-19 12:23:34',
  url: '/ore/s',
  content: 'this is the content',
}
