import React, { Component } from 'react'
import axios from 'axios'

export default class post extends Component {
  render() {
    return (
        <div>
            <button onClick={()=>{
                axios({
                    baseURL:'http://106.12.150.233:8090',
                    url:'/api/private/v1/login',
                    method:'post',
                    data:{
                        username:'lzc',
                        password:'123456'
                    },
                    timeout:6000,
                }).then(res=>console.log(res)).catch(err=>console.log(err))
            }}>发送post请求</button>

            <button onClick={()=>{
                axios.post('/api/private/v1/login',{
                    baseURL:'http://106.12.150.233:8090',
                    data:{
                        username:'lzc',
                        password:'123456'
                    },
                    timeout:6000
                }).then(res=>console.log(res)).catch(err=>console.log(err))
            }}>发送post请求2</button>

        </div>
    )
  }
}
