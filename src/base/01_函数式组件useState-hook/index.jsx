import React, { useState } from 'react'

export default function Home() {
    // useState 得到的是一个数组 数组中第一项为初始状态 第二项为修改状态的方法

    // useState 对于引用数据类型的状态必须先深拷贝一下才可以更新视图
    let [str,setStr] = useState('好好学习天天向上')
    let [num,setNum] = useState(1000)
    let [arr,setArr] = useState([1,2,3,4,5])
    let [obj,setObj] = useState({
        name:'张三',
        age:18
    })
    let [isShow,setShow] = useState(true)
    let changeStr = () =>{
        str = '学习使我快乐'
        setStr(str)
    }
    let changeNum = () =>{
        num++
        setNum(num)
    }
    let changeArr = () =>{
        let newArr = [...arr]
        newArr.push(6)
        setArr(newArr)
    }
    let changeObj = () =>{
        let newObj = {...obj}
        newObj.name = '李四'
        setObj(newObj)
    }
    let changeShow = () =>{
        isShow = !isShow
        setShow(isShow)
    }
    return (
        <div>
            <h1>函数式组件useState</h1>
            <h2>{str}</h2>
            <button onClick={changeStr}>切换字符串</button>
            <h2>{num}</h2>
            <button onClick={changeNum}>点击+1</button>
            <ul>
                {
                    arr.map((item,index)=>{
                        return (
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </ul>
            <button onClick={changeArr}>点击追加一个元素(数组)</button>
            <h2>{obj.name}------{obj.age}</h2>
            <button onClick={changeObj}>点击改变对象的属性</button>
            {
                isShow && <h2>好好学习天天向上</h2>
            }
            <button onClick={changeShow}>点击{isShow?'隐藏':'显示'}</button>
        </div>
    )
}
