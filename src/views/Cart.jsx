import React, { useState } from 'react'
import store  from '../redux'
import {setAddCartActions,setDelCartActions} from '../redux/action/cartAction'

export default function Cart() {
  let [list,setList] = useState(store.getState().cartReducer.cartList)
  //提交action
  let addCart = () =>{
    store.dispatch(setAddCartActions('手机'))
  }

  let delCart = (index) =>{
    store.dispatch(setDelCartActions(index))
  }

  //订阅
  store.subscribe(()=>{
    //更新视图
    setList(store.getState().cartReducer.cartList)
  })

  return (
    <div>
      <h1>Cart</h1>
      <ol>
        {
          list.map((item,index)=>{
            return (
              <li key={index}>{item}---<button onClick={()=>delCart(index)}>删除</button></li>
            )
          })
        }
      </ol>
      <button onClick={addCart}>添加购物车</button>
    </div>
  )
}
