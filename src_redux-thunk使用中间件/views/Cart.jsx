import React, { useEffect, useState } from 'react'
import store from '../redux/index'
import {getCartActions} from '../redux/action/cartAction'

export default function Cart() {
  let [cartList,setCartList] = useState([])
  useEffect(()=>{
    if(store.getState().cartReducer.cartList.length===0){
      store.dispatch(getCartActions())
    }else{
      setCartList(store.getState().cartReducer.cartList)
    }
  },[])

  //提交action

  //订阅
  store.subscribe(()=>{
    setCartList(store.getState().cartReducer.cartList)
  })

  return (
    <div>
      <h1>Cart</h1>
      <ol>
        {
          cartList.map((item,index)=>{
            return (
              <li key={index}>
                {item.storeName}
              </li>
            )
          })
        }
      </ol>
    </div>
  )
}
