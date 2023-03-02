import React ,{ useRef,useState } from 'react'

export default function Home() {
    //保留数据
    let num = useRef(0)
    console.log(num)
    let list = useRef([1,2,3,4])
    let [msg,setMsg] = useState(100)
    return (
        <div>
            <h3>useRef  保存数据------{num.current}------{msg}</h3>
            <ul>
                {
                    list.current.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
            <button onClick={()=>{
                list.current.push(10)
                num.current++
                setMsg(msg+10)
            }}>add</button>
        </div>
    )
}
