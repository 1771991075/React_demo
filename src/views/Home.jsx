import React, { useState } from 'react'
import store from '../redux'
import { setPasswordActions } from '../redux/action/userAction'


export default function Home() {
  let [user,setUser] = useState(store.getState().userReducer)
  let changePassword = ()=>{
    store.dispatch(setPasswordActions('987654'))
  }
  store.subscribe(()=>{
    setUser(store.getState().userReducer)
  })
  return (
    <div>
      <h1>Home</h1>
      <h2>用户名:{user.name}------密码:{user.password}</h2>
      <button onClick={changePassword}>修改密码</button>
    </div>
  )
}
