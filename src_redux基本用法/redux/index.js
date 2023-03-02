//创建仓库 createStore
import { legacy_createStore as createStore } from 'redux'

//默认状态
let defaultState = {
    num:0
}

//处理函数    参数一初始化状态    参数二  操作对象
let reducer = (state=defaultState,action) =>{
    switch(action.type){
        case 'ADD':
            let addState = {...state}
            addState.num++
            return addState
        default:
            return state
    }
}

let store = createStore(reducer)

export default store