import React, { forwardRef, useImperativeHandle, useState } from 'react'

//使用forword修饰的子组件，参数中必须有两个参数，props、ref 
function Child(props,ref) {
  let [num, setNum] = useState(0)
  let changeNum = () => {
    setNum(num + 1)
  }
  // 指定子组件暴露给ref指定属性 参数一 ref 对象 参数二回调函数 必须要有返回值，返回值必须是个对象 可以将要供父组件使用的状态或方法返回
  useImperativeHandle(ref, () => {
    return {
      num,
      changeNum
    }
  })
  return (
    <div>
      <h2>Child组件------------{num}</h2>
    </div>
  )
}

export default forwardRef(Child)
