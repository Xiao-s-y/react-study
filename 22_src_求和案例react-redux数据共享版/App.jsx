import React, { Component } from 'react'
/* //引入store，用于获取redux中保存的状态
import store from './redux/store' */
import Count from './containers/Count'
import Person from './containers/Person'

export default class App extends Component {
  render() {
    return (
      <div>
        <Count />
        <hr />
        <Person />
      </div>
    )
  }
}
