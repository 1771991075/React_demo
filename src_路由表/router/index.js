// 根据路由表生成对应匹配规则  useRoutes只能在函数式组件中使用
import {useRoutes} from 'react-router-dom'
import elements from './elements'
import React from 'react'

export default function RoutesDOM() {
    //生成路由表
    let element = useRoutes(elements)
    return (
        <div>
            {element}
        </div>
    )
}
