export default [
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
