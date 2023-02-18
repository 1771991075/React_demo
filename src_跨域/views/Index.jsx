import React, { Component } from 'react'
import axios from 'axios'

export default class Index extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>{
            axios.get('/maoyan/api/mmdb/movie/v3/list/hot.json?ct=郑州&ci=73&channelId=4').then(res=>console.log(res))
        }}>获取猫眼电影</button>
        
        <button onClick={()=>{
            axios.get('/douyu/api/cate/recList').then(res=>console.log(res))
        }}>获取斗鱼分类</button>
      </div>
    )
  }
}
