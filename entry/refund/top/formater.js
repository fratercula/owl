export default {
  rules: [
    [
      {
        prefix: '剩余时间： ',
        key: 'timeout',
        props: {
          style: { marginRight: 30 },
        },
      },
      {
        type: 'link',
        prefix: '退款编号： ',
        key: 'parentOrderId',
        props: {
          href: 'key:parentOrderIdURL',
          style: { marginRight: 30 },
        },
      },
      {
        type: 'link',
        prefix: '订单编号： ',
        key: 'auctionId',
        props: {
          href: 'key:auctionNameURL',
          style: { marginRight: 30 },
        },
      },
      {
        type: 'link',
        prefix: '买家昵称： ',
        key: 'nick',
      },
      {
        type: 'icon',
        props: {
          type: 'key:icon',
        },
      },
    ],
  ],
}
