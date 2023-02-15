import Home from '../views/Home'
import Cart from '../views/Cart'
import Mine from '../views/Mine'
import Order from '../views/Order'
import Login from '../views/Login'

let elements = [
    {
        path:'/',
        element:<Home/>,
        author:false
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
    }
]

export default elements