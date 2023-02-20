import React from 'react'
import { NavLink , Outlet } from 'react-router-dom'
import './index.css'
export default function Index() {
  
  return (
    <div>
      <div className='btnNav'>
          <NavLink to='home'>首页</NavLink>
          <NavLink to='order'>订单</NavLink>
          <NavLink to='cart'>购物车</NavLink>
          <NavLink to='mine'>我的</NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  )
}
