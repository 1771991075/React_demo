import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
    let [num,setNum] = useState(0)
    let [name,setName] = useState('张三')
    // useEffect 类似于 类组件中 ComponentDidMount ComponentDidUpdate
    // 参数一执行回调函数，参数二：依赖项，若为空数组则不依赖任何属性 有且只会执行一次，若不为空数组，则该依赖项发生改变时就会再次触发,若第二个参数不传则只要是状态改变就会执行
    useEffect(()=>{
        console.log('渲染了')
        axios.get('https://apif.java.crmeb.net/api/front/index').then(res=>
            console.log(res)
        )
        window.onresize = () =>{
            console.log('窗口改变了');
        }
        // 副作用函数可以有return值但return值必须为一个函数 ，当组件销毁时触发这个函数
        return () =>{
            console.log('组件销毁了');
            window.onresize = null
        }
    },[num])
    return (
        <div>
            <h1>{num}------{name}</h1>
            <button onClick={()=>{
                setNum(num+1)
            }}>++</button>
            <button onClick={()=>{
                setName('李四')
            }}>点击改变</button>
        </div>
    )
}
