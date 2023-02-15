import { Navigate } from "react-router-dom";
import Detail from '../views/Detail'
import Index from '../views/Index'
//引入keepAlive
import KeepAlive from 'react-activation';
let elements = [
    {
        path:'/index',
        element:<KeepAlive id="home"><Index/></KeepAlive>
    },{
        path:'/detail',
        element:<Detail/>
    },{
        path:'/',
        element:<Navigate to='/index'></Navigate>
    }
]

export default elements