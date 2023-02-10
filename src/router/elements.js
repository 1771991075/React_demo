import { Navigate } from "react-router-dom";
import Detail from '../views/Detail'
import Index from '../views/Index'
let elements = [
    {
        path:'/index',
        element:<Index/>
    },{
        path:'/detail',
        element:<Detail/>
    },{
        path:'/',
        element:<Navigate to='/index'></Navigate>
    }
]

export default elements