import React, {useContext} from 'react'
import globaleContext from '../utils/globaleContext'
export default function One() {
  // 获取供应商提供的数据 参数为 要获取的上下位对象
  let value = useContext(globaleContext)
  return (
    <div>
      <h1>one组件------{value.name}------{value.age}</h1>
      <button onClick={()=>{
        value.setage(100)
      }}>改变age</button>
    </div>
  )
}
