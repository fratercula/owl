export default {
  align: 'vertical',
  rules: [
    [
      {
        type: 'link',
        key: 'auctionName',
        props: {
          href: 'key:auctionNameURL',
        },
      },
    ],
    ['sku'],
    [
      {
        key: 'refundId',
        prefix: '商品编码： ',
      },
    ],
  ],
}
