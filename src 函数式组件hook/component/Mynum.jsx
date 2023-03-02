import React from 'react'
import useNum from '../hooks/useNum'
export default function Mynum() {
  let [num, add] = useNum()
  return (
    <div>
      num组件---{num}
      <button onClick={{add}}>++</button>
    </div>
  )
}
