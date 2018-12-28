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
        src: 'key:image',
        style: {
          borderRadius: '50%',
          marginRight: 10,
        },
      },
    },
    {
      type: 'name',
      props: {
        name: 'key:name',
        role: 'key:role',
      },
      style: {
        marginTop: 10,
      },
    },
    {
      type: 'button',
      props: {
        disabled: 'key:disabled',
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
        expertise: 'key:expertise',
      },
    },
  ],
]

export const main = [
  [
    {
      type: 'checkbox',
      props: {
        checked: 'key:checked',
      },
    },
  ],
  [
    {
      type: 'lv0',
      props: {
        image: 'key:image',
        name: 'key:name',
        role: 'key:role',
        disabled: 'key:disabled',
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
        career: 'key:career',
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
        expertise: 'key:expertise',
      },
    },
  ],
  [
    {
      type: 'icon',
      props: {
        icons: 'key:icon',
      },
      style: {
        width: '100%',
      },
    },
  ],
]
