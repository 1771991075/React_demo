import React, { useState } from 'react'
import store from './redux'

export default function App() {
    let [num,setNum] = useState(store.getState().num)
    store.subscribe(()=>{
        setNum(store.getState().num)
    })
    return (
        <div>
            <h1>redux的基本用法</h1>
            <h2>{num}</h2>
            <button onClick={()=>{
                store.dispatch({
                    type:'ADD'
                })
            }}>点击+1</button>
        </div>
    )
}
