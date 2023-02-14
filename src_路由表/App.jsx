import React, { Component } from 'react'
import { NavLink , Link } from 'react-router-dom'
import RoutesDOM from './router/index'
// NavLink 用来跳转路由 Routes 用来展示对应组件 Route 用来定义路由匹配规则
// Link组件和NavLink 组件一样都是用来跳转路由的 使用link组件标签上没有选中状态
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavLink to='/home'>首页</NavLink>
        <NavLink to='/cart'>购物车</NavLink>
        <NavLink to='/mine'>我的</NavLink>
        <Link to='/order'>订单</Link>
        <RoutesDOM></RoutesDOM>
      </div>
    )
  }
}
