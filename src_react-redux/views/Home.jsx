import React, { useEffect, useState } from 'react'
import store from '../redux/index'
import { getCartActions } from '../redux/action/cartAction'

export default function Home() {

  let [num,setNum] = useState(0)

  useEffect(()=>{
    if(store.getState().cartReducer.cartList.length===0){
      store.dispatch(getCartActions())
    }else{
      setNum(store.getState().cartReducer.cartList.length)
    }
  })

  //订阅
  store.subscribe(()=>{
    setNum(store.getState().cartReducer.cartList.length)
  })
  return (
    <div>
      <h1>Home</h1>
      <h2>购物车数量---{num}</h2>
    </div>
  )
}
