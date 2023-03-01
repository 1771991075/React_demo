import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
export default function Home() {

  let list = [
    {
      name: '手机',
      price: 1000
    }, {
      name: '电脑',
      price: 5000
    }, {
      name: '手表',
      price: 800
    }
  ]

  const navigate = useNavigate()

  return (
    <div>
      <div className='topNav'>
        <div></div>
        <div><h2>首页</h2></div>
        <div></div>
      </div>
      {
        list.map((item, index) => {
          return (
            <div className='list' key={index} onClick={()=>{
              navigate(`/info?name=${item.name}&price=${item.price}`)
            }}>
              {item.name}---{item.price}
            </div>
          )
        })
      }
    </div>
  )
}
