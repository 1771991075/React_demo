import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
export default function Index() {
  return (
    <div>
      <div className='btmNav'>
        <NavLink to='home'>首页</NavLink>
        <NavLink to='cart'>购物车</NavLink>
        <NavLink to='mine'>我的</NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  )
}
