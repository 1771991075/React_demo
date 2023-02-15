import React, { Component } from 'react'
import WithRouter from '../router/withRoute'

class Login extends Component {
  render() {
    return (
      <div>
        <h1>登录页面</h1>
        <button onClick={()=>{
          localStorage.setItem('token','112313515')
          this.props.router.myuseNavigate(this.props.router.search.get('redircturl'))
        }}>登录</button>
      </div>
    )
  }
}

export default WithRouter(Login)
