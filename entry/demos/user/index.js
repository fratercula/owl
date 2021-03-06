import React, { Component } from 'react' // eslint-disable-line
import { Cell } from '../../../src'
import { main } from './formater'
import {
  lv0,
  lv1,
  lv2,
  icon,
  checkbox,
} from './customs'
import mainData from './data'
import './index.less'

export default class extends Component {
  state = {
    data: JSON.parse(JSON.stringify(mainData)),
  }

  onEvent = (type, e) => {
    const { data } = this.state
    data.checked = e
    data.disabled = !e
    this.setState({ data })
  }

  render() {
    const { data } = this.state

    return (
      <div className="user">
        <Cell
          components={{
            lv0,
            lv1,
            lv2,
            icon,
            checkbox,
          }}
          format={main}
          data={data}
          onEvent={this.onEvent}
        />
      </div>
    )
  }
}
