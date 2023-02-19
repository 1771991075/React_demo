import Index from '../views/Index'
import Home from '../views/Home'
import Order from '../views/Order'
import Mine from '../views/Mine'
import Info from '../views/Info'
import Cart from '../views/Cart'
import Login from '../views/Login'
import { Navigate } from 'react-router-dom'

let elements = [
    {
        path:'/index',
        element:<Index/>,
        author:false,
        children:[
            {
                path:'home',
                element:<Home/>,
                author:false
            },{
                path:'order',
                element:<Order/>,
                author:true
            },{
                path:'mine',
                element:<Mine/>,
                author:true
            },{
                path:'cart',
                element:<Cart/>,
                author:true
            }
        ]
    },{
        path:'/info',
        element:<Info/>,
        author:true
    },{
        path:'/login',
        element:<Login/>,
        author:false
    },{
        path:'/',
        element:<Navigate to='/index/home'></Navigate>,
        author:false
    }
]

export default elements