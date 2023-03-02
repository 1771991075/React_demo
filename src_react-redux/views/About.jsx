import React from 'react'
import {addAboutAction} from '../redux/action/aboutAction'
import { useSelector, useDispatch } from 'react-redux'

export default function About() {
    //获取dispatch 用来提交actions
    let dispatch = useDispatch()

    let num = useSelector((state)=>{
        return state.aboutReducer.num
    })

    return (
        <div>
            <h1>About</h1>
            <h2>{num}</h2>
            <button onClick={() => {
                dispatch(addAboutAction())
            }}>+1</button>
        </div>
    )
}
