import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// BrowserRouter 
import { HashRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    // 使用 BrowserRouter 将整个应用包裹 表示路由模式 
    // BrowserRouter history 模式路由
    // HashRouter hash 模式
    /* 
        常见的路由模式有两种：
        1. hash 模式 路径带有井号
        2. history 模式 路径上没有#号
        区别：history模式要比hash更美观，若前端项目使用history模式 打包上线时必须由后端配置服务地址
    */
    <HashRouter>
        <App/>
    </HashRouter>
)