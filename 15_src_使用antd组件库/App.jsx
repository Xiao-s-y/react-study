import React, { Component } from 'react'
import {Button} from 'antd'
import 'antd/dist/reset.css'
import {WechatFilled } from '@ant-design/icons';

export default class App extends Component {
  render() {
    return (
      <div>
        App
          <Button type="primary">Primary Button</Button>
          <WechatFilled />
      </div>
    )
  }
}
