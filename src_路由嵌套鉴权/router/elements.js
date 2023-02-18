import Home from '../views/Home'
import Cart from '../views/Cart'
import Mine from '../views/Mine'
import Order from '../views/Order'
import Login from '../views/Login'
import Index from '../views/Index'
import Info from '../views/Info'
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
                path:'cart',
                element:<Cart/>,
                author:true
            },{
                path:'mine',
                element:<Mine/>,
                author:true
            }
        ]
    },{
        path:'/cart',
        element:<Cart/>,
        author:true
    },{
        path:'/mine',
        element:<Mine/>,
        author:true
    },{
        path:'/order',
        element:<Order/>,
        author:true
    },{
        path:'/login',
        element:<Login/>,
        author:false
    },{
        path:'/info',
        element:<Info/>,
        author:true
    },{
        path:'/',
        element:<Navigate to='/index/home'></Navigate>,
        author:false
    }
]

export default elements