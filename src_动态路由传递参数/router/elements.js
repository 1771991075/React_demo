import { Navigate } from "react-router-dom";
import Index from '../views/Index'
import Home from '../views/Home'
import Cart from '../views/Cart'
import Mine from '../views/Mine'
import Info from '../views/Info'
let elements = [
    {
        path:'/index',
        element:<Index/>,
        children:[
            {
                path:'home',
                element:<Home/>
            },{
                path:'cart',
                element:<Cart/>
            },{
                path:'mine',
                element:<Mine/>
            }
        ]
    },{
        path:'/info/:goodsname/:price',
        element:<Info/>
    },{
        path:'/',
        element:<Navigate to='/index/home'></Navigate>
    }
]

export default elements