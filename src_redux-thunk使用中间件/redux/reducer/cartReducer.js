let defaultState = {
    cartList:[]
}

let cartReducer = (state=defaultState,action) =>{
    switch(action.type){
        case 'GET_CART_LIST':
            let addState = {...state}
            addState.cartList = action.cartList
            return addState
        default:
            return state
    }
}

export default cartReducer