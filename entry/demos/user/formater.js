export const f01 = [
  [
    {
      key: 'name',
      props: {
        style: {
          fontWeight: 'bold',
          fontSize: 16,
          color: '#000',
        },
      },
    },
  ],
  ['role'],
]

export const f0 = [
  [
    {
      type: 'image',
      props: {
        src: ':image',
        style: {
          borderRadius: '50%',
          marginRight: 10,
        },
      },
    },
    {
      type: 'name',
      props: {
        name: ':name',
        role: ':role',
      },
      style: {
        marginTop: 10,
      },
    },
    {
      type: 'button',
      props: {
        disabled: ':disabled',
      },
    },
  ],
]

export const f1 = [
  [
    {
      key: 'career',
      prefix: 'What I do: ',
      props: {
        style: {
          fontWeight: 'bold',
        },
      },
      style: {
        padding: '10px 0',
      },
    },
  ],
]

export const f2 = [
  [
    {
      prefix: 'Expertise',
      type: 'string',
    },
  ],
  [
    {
      type: 'tags',
      props: {
        expertise: ':expertise',
      },
    },
  ],
]

export const main = [
  [
    {
      type: 'checkbox',
      props: {
        checked: ':checked',
      },
    },
  ],
  [
    {
      type: 'lv0',
      props: {
        image: ':image',
        name: ':name',
        role: ':role',
        disabled: ':disabled',
      },
      style: {
        width: '100%',
      },
    },
  ],
  [
    {
      type: 'lv1',
      props: {
        career: ':career',
      },
      style: {
        width: '100%',
      },
    },
  ],
  [
    {
      type: 'lv2',
      props: {
        expertise: ':expertise',
      },
    },
  ],
  [
    {
      type: 'icon',
      props: {
        icons: ':icon',
      },
      style: {
        width: '100%',
      },
    },
  ],
]
