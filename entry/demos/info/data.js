export default [
  [
    {
      value: 'Card Info',
      props: {
        style: {
          color: '#000',
          fontSize: 18,
          marginBottom: 10,
          paddingLeft: 10,
          borderLeft: '4px solid #000',
          lineHeight: 1,
        },
      },
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
    },
    {
      label: 'Amount',
      value: '$345',
      props: {
        style: {
          color: 'red',
        },
      },
    },
  ],
  [
    {
      label: 'Time',
      value: '2018-09-12 12:30:45',
    },
    {
      type: 'image',
      value: 'https://tempim-1256796114.cos-website.ap-shanghai.myqcloud.com/placeholder/70x70',
      label: 'Image',
    },
  ],
  [
    {
      label: 'Address',
      value: 'Miami Heat at Philadelphia',
    },
    {
      label: 'Nick',
      value: 'Abster Husklt',
    },
  ],
  [
    {
      type: 'line',
      props: {
        style: {
          marginTop: 15,
        },
      },
    },
  ],
  [
    {
      label: 'Custom',
      type: 'checkbox',
      props: {
        checked: false,
      },
    },
  ],
]
