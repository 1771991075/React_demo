import React, { Component } from 'react'
import WithRouter from '../router/withRoute'

class Order extends Component {
  render() {
    return (
      <div>
        <h1>订单</h1>
      </div>
    )
  }
}

export default WithRouter(Order)
