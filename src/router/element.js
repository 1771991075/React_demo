import Home from '../views/Home'
import Cart from '../views/Cart'
import Mine from '../views/Mine'
import About from '../views/About'
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
    },
    {
        path:'/about',
        element:<About/>
    }
]

export default element