import { Navigate } from "react-router-dom";
import Home from "../views/Home";
import Cart from "../views/Cart";
import Mine from "../views/Mine";
import Order from "../views/Order";
let elements = [
    {
        path:'/home',
        element:<Home/>
    },{
        path:'cart',
        element:<Cart/>
    },{
        path:'mine',
        element:<Mine/>
    },{
        path:'order',
        element:<Order/>
    },{
        path:'/',
        element:<Navigate to='/home'></Navigate>
    }
]
export default elements