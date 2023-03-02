let setAddCartActions = (item) =>{
    return {
        type:'ADD_CART',
        item:item
    }
}

let setDelCartActions = (index) =>{
    return {
        type:'DEL_CART',
        index:index
    }
}

export {
    setAddCartActions,
    setDelCartActions
}