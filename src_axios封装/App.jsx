import React, { Component } from 'react'
import sendHttp from './http/sendHttp'
import User from './User'
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>axios配置</h1>
        <button onClick={()=>this.login()}>发送post请求</button>
        <button onClick={()=>this.getUser()}>获取用户列表</button>
        <User/>
      </div>
    )
  }

  login(){
    sendHttp(`/login`,'post',{username:'admin',password:'123456'}).then(res=>console.log(res)).catch(err=>console.log(err))
  }

  async getUser(){
    let res = await sendHttp(`/users`,'get',{query:"admin",pagenum:1,pagesize:10})
    console.log(res);
  }

}
