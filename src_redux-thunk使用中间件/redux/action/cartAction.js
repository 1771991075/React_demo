import axios from "axios"

let getCartActions = () =>{
    return (dispatch)=>{
        axios.get(`https://apif.java.crmeb.net/api/front/product/leaderboard`).then(res=>{
            dispatch({
                type:'GET_CART_LIST',
                cartList:res.data.data
            })
        })
    }
}

export {
    getCartActions
}