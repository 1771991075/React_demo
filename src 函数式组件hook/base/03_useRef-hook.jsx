import React, { useRef } from 'react'
// import Child from './component/Child'

export default function HomeRef() {
    let h3Ref = useRef()
    // let childRef = useRef()
    return (
        <div>
            <h3 ref={h3Ref}>useRef - hooks使用</h3>
            <button onClick={()=>{
                console.log(h3Ref.current)
                h3Ref.current.style.color = 'red'
            }}>获取h3标签</button>
            {/* 注意：ref不能直接获取函数式组件实例 */}
            {/* <Child ref={childRef}></Child>
            <button onClick={()=>{
                console.log(childRef)
            }}>获取child实例</button> */}
        </div>
    )
}
