import React, { Component } from 'react'
import RouteDOM from './router'
import { NavLink } from 'react-router-dom'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavLink to='/'>首页</NavLink>  |
        <NavLink to='/cart'>购物车</NavLink>  |
        <NavLink to='/mine'>我的</NavLink>  |
        <NavLink to='/order'>订单</NavLink>
        <RouteDOM/>
      </div>
    )
  }
}
