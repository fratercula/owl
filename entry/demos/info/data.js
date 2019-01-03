export default [
  [
    {
      value: '卡片信息',
      props: {
        style: {
          color: '#000',
          fontSize: 18,
          marginBottom: 5,
          paddingLeft: 10,
          borderLeft: '4px solid #000',
          lineHeight: 1,
        },
      },
    },
  ],
  [
    {
      label: '金额很多话',
      value: 'V-T To justify printed text means to adjust the spaces between the words so that each line of type is exactly the same length. 使 (文本) 对齐',
    },
    {},
    {
      value: '一个商品',
    },
  ],
  [
    {
      type: 'space',
    },
  ],
  [
    {
      label: {
        text: '金额',
        colon: ' ? ',
        style: {
          color: 'blue',
        },
      },
      margin: [20, 3, 4],
      value: '2018-09-12 12:30:45',
    },
    {
      label: '商品',
      value: '一个商品',
    },
  ],
  [
    {
      type: 'line',
      props: {
        style: {
          marginTop: 20,
        },
      },
    },
  ],
  [
    {
      value: 'aksdj4',
    },
    {
      label: 'checkbox',
      type: 'checkbox',
      props: {
        checked: false,
      },
    },
  ],
]
