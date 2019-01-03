import React, { Component } from 'react'
import { Card } from '../../../src'
import * as customs from './customs'
import mainData from './data'
import css from './index.less'

export default class extends Component {
  state = {
    data: JSON.parse(JSON.stringify(mainData)),
  }

  onChange = (type, e) => {
    const { data } = this.state
    data[5][1].props.checked = e
    this.setState({ data })
  }

  render() {
    const { data } = this.state
    const options = {
      cellJustify: 'space-between',
      cellMargin: [0, 20],
      label: {
        colon: ' - ',
      },
    }

    return (
      <div className={css.info}>
        <div>
          <Card
            customs={customs}
            options={options}
            data={data}
            onChange={this.onChange}
          />
        </div>
      </div>
    )
  }
}
