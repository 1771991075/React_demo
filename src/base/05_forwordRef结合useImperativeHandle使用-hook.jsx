import React, { useRef } from 'react'
import Child from './component/Child'

export default function Home() {
    let ChildRef = useRef()
    return (
        <div>
            <h1>forwordRef的使用</h1>
            <Child ref={ChildRef} />
            <button onClick={()=>{
                // 获取子组件暴露的属性
                console.log(ChildRef.current.num);
                // 调用子组件暴露的方法
                ChildRef.current.changeNum()
            }}>获取child组件中的值</button>
        </div>
    )
}
/* 
    总结：
    1. 若父组件想要获取子组件中的状态或方法 子组件需要先使用forwordRef 修饰
    2. 在子组件中使用 useImperativeHandle hooks 将子组件要暴露的属性返回
    3. 在父组件中使用 ref.current.属性名获取

*/