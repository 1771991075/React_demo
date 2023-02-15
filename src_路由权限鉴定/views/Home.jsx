import React, { Component } from 'react'
import WithRouter from '../router/withRoute'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>首页</h1>
      </div>
    )
  }
}

export default WithRouter(Home)
