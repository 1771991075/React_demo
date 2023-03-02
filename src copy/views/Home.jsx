import React, { useState } from 'react'
import store from '../redux'
import { setSexActions } from '../redux/action/userAction'


export default function Home() {
  let [user,setUser] = useState(store.getState().userReducer)
  store.subscribe(()=>{
    setUser(store.getState().userReducer)
  })
  return (
    <div>
      <h1>Mine</h1>
      <h2>{user.name}---{user.age}---{user.sex}</h2>
      <button onClick={()=>{
        store.dispatch(setSexActions('女'))
      }}>修改密码</button>
    </div>
  )
}
