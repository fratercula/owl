export default {
  columns: [
    {
      title: 'Name',
      formater: 'name',
    },
    {
      title: 'Address',
      formater: [
        [
          {
            key: 'city',
            props: {
              style: {
                fontWeight: 'bold',
              },
            },
          },
          'sheet',
        ],
        [
          {
            key: 'zip',
            props: {
              style: {
                fontStyle: 'italic',
              },
            },
          },
        ],
      ],
    },
    {
      title: 'Tags',
      formater: [
        [
          {
            type: 'tags',
            props: {
              tags: 'key:tags',
            },
          },
        ],
      ],
    },
  ],
  dataSource: [
    {
      name: 'Edrward',
      city: 'London',
      sheet: 'Da Yuan A2dong 1704',
      zip: '0000789',
      tags: [
        'HTML',
        'UX',
        'WordPress',
        'Java',
        'Web',
        'JQuery',
      ],
    },
    {
      name: 'Sriply',
      city: 'Parry',
      sheet: 'Da Yuans A2dong 1704',
      zip: '047622',
      tags: [
        'PHP',
        'JavaScript',
        'CSS',
        'HTML',
        'UX',
        'WordPress',
      ],
    },
  ],
}
