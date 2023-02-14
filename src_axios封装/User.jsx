import React, { Component } from 'react'
import sendHttp from './http/uploadHttp'
export default class User extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>{
            sendHttp('/api/front/sendCode','post',{phone:"手机号码"},{'content-type':'application/x-www-form-urlencoded'}).then(res=>console.log(res)).catch(err=>console.log(err))
        }}>获取手机验证码</button>

        <input type="file" onChange={e=>{
            //获取文件对象信息
            let file = e.target.file[0]
            let data = new FormData()
            data.append('photo',file)
            sendHttp(`/ajax/upload`,'post',data,{'content-type':'multipart/form-data'}).then(res=>console.log(res))
        }} />
      </div>
    )
  }
}

