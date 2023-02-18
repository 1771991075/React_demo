import React, { Component } from 'react'
import WithRouter from '../router/withRoute'

class Mine extends Component {
  render() {
    return (
      <div>
        <h1>我的</h1>
      </div>
    )
  }
}

export default WithRouter(Mine)
