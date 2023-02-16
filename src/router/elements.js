import { Navigate } from 'react-router-dom'
import Loading from '../component/Loading'
// lazy 路由懒加载方法 按需引入 Suspense内置组件 当路由未加载完成时暂时fallback中的内容
import {lazy ,Suspense} from 'react'
// 缓存组件
import KeepAlive from 'react-activation';
// 使用路由懒加载
let Cart = lazy(()=>import('../views/Cart'))
let Home = lazy(()=>import('../views/Home'))
let Index = lazy(()=>import('../views/Index'))
let Order = lazy(()=>import('../views/Order'))
let Mine = lazy(()=>import('../views/Mine'))
let Info = lazy(()=>import('../views/Info'))
let Login = lazy(()=>import('../views/Login'))
let NotFound = lazy(()=>import('../views/NotFound'))

let elements = [
    {
        path:'/index',
        element:<Suspense fallback={<Loading/>}><Index/></Suspense>,
        author:false,
        children:[
            {
                path:'home',
                element:<KeepAlive id='home'><Suspense fallback={<Loading/>}><Home/></Suspense></KeepAlive>,
                author:false
            },{
                path:'order',
                element:<Suspense fallback={<Loading/>}><Order/></Suspense>,
                author:true
            },{
                path:'mine',
                element:<Suspense fallback={<Loading/>}><Mine/></Suspense>,
                author:true
            },{
                path:'cart',
                element:<Suspense fallback={<Loading/>}><Cart/></Suspense>,
                author:true
            }
        ]
    },{
        path:'/info',
        element:<Suspense fallback={<Loading/>}><Info/></Suspense>,
        author:true
    },{
        path:'/login',
        element:<Suspense fallback={<Loading/>}><Login/></Suspense>,
        author:false
    },{
        path:'/',
        element:<Navigate to='/index/home'></Navigate>,
        author:false
    },{
        path:'*',
        element:<Suspense fallback={<Loading/>}><NotFound/></Suspense>,
        author:false
    }
]

export default elements