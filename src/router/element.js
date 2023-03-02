import Home from '../views/Home'
import Cart from '../views/Cart'
import Mine from '../views/Mine'
let element = [
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/cart',
        element:<Cart/>
    },
    {
        path:'/Mine',
        element:<Mine/>
    }
]

export default element