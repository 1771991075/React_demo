import React from 'react'
import RouterDOM from './router'
import { NavLink } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <h1>Redux模块儿化</h1>
      <NavLink to='/'>首页</NavLink>|
      <NavLink to='/cart'>购物车</NavLink>|
      <NavLink to='/mine'>我的</NavLink>|
      <NavLink to='/about'>关于</NavLink>
      <RouterDOM />
    </div>
  )
}
