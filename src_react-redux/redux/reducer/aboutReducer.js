let defaultState={
    num:0
}

let aboutReducer = (state=defaultState,action)=>{
    switch(action.type){
        case 'ADD':
            let addState = {...state}
            addState.num++
            return addState
        default:
            return state
    }
}

export default aboutReducer