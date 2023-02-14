import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>axios发送请求</h1>
        <button onClick={()=>{
            axios({
                // baseURl 请求时axios会默认在请求地址上添加baseUrl
                baseURL:'https://demo26.crmeb.net',
                // 请求地址
                url:'/api/category',
                // 请求方式
                method:'get',
                // get请求参数
                params:null,
                // 请求延迟
                timeout:6000
            }).then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log(err);
            })
        }}>发送get请求</button>

        <button onClick={()=>{
            axios({
                baseURL:'https://demo26.crmeb.net',
                url:'/api/pc/get_products',
                method:'get',
                params:{
                    page:1,
                    limit:10,
                    cid:53,
                    sid:0,
                    priceOrder:"",
                    news:0
                },
                timeout:6000
            }).then(res=>console.log(res)).catch(err=>console.log(err))
        }}>发送get请求2</button>

        <button onClick={()=>{
            axios.get('/api/pc/get_products',{
                baseURL:'https://demo26.crmeb.net',
                timeout:6000,
                params:{
                    page:1,
                    limit:10,
                    cid:53,
                    sid:0,
                    priceOrder:"",
                    news:0
                }
            }).then(res=>console.log(res)).catch(err=>console.log(err))
        }}>发送get请求3</button>

      </div>
    )
  }
}
