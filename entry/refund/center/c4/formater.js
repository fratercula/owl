export default {
  align: 'vertical',
  rules: [
    [
      {
        type: 'link',
        key: 'orderSendGoodsStatus',
        props: {
          href: 'key:parentOrderIdURL',
        },
        prefix: '发货物流： ',
      },
    ],
    [
      {
        type: 'link',
        key: 'refundStatusText',
        props: {
          href: 'key:auctionNameURL',
        },
        prefix: '退货物流： ',
      },
    ],
    [
      {
        key: 'refundStatusText',
        prefix: '状态： ',
      },
    ],
  ],
}
