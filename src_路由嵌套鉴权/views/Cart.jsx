import React, { Component } from 'react'
import WithRouter from '../router/withRoute'

class Cart extends Component {
  render() {
    return (
      <div>
        <h1>购物车</h1>
      </div>
    )
  }
}

export default WithRouter(Cart)
