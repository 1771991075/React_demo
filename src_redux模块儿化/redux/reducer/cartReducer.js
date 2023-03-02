let defaultState = {
    cartList:['辣条','面包','薯条']
}

let cartReducer = (state=defaultState,action) =>{
    switch(action.type){
        case 'ADD_CART':
            let addState = JSON.parse(JSON.stringify(state))
            addState.cartList.push(action.item)
            return addState
        case 'DEL_CART':
            let delState = JSON.parse(JSON.stringify(state))
            delState.cartList.splice(action.index,1)
            return delState
        default:
            return state
    }
}

export default cartReducer