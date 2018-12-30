import React from 'react'
import { Card } from '../../../src'

const data = [
  [
    {},
    {
      label: '订单编号',
      value: '20180912123045',
    },
    {
      label: '时间',
      value: '2018-09-12 12:30:45',
    },
  ],
  [
    {
      label: '金额',
      value: 'V-T To justify printed text means to adjust the spaces between the words so that each line of type is exactly the same length. 使 (文本) 对齐',
      align: 200,
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
      label: '金额',
      options: {
        labelWidth: 100,
        labelColor: 'blue',
        labelMarginRight: 12,
        colon: ' : ',
        cellMargin: '20px',
      },
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
  ],
]

const options = {
  colon: ' ? ',
  labelWidth: 0,
}

export default function () {
  return (
    <Card options={options} data={data} />
  )
}
