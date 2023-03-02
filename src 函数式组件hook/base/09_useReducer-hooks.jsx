import React ,{useReducer} from 'react'
// 创建初始化状态
let defaultState = {
    num:0,
    age:18,
    list:[1,2,3,4,5],
    user:{
        name:"张三"
    }
}
// 参数一初始状态 参数二 提交的数据对象
let reducer =(state,action)=>{
    // console.log(state)
    // console.log(action)
    // let newState ={...state};
    // newState.num ++;
    // return newState
    switch(action.type){
        case "add":
            let newState = {...state};
            newState.num++;
            return newState;
        case 'addage':
            let ageState = {...state};
            ageState.age ++;
            return ageState;
        default :
            return state;
    }
}
export default function Home() {
    //创建reducer 参数一 reducer函数 参数二 初始化状态
    // state 表示 共享状态 dispatch 则为改变状态唯一方法
    let [state,disPatch] = useReducer(reducer,defaultState)
    return(
        <div>
            <h1>useReducer - hooks - {state.age} -- {state.num}</h1>
            <button onClick={()=>{
                 disPatch({
                    type:"addage"
                 })
            }}>++</button>
            <Child></Child>
        </div>
    )
}

function Child(){
    let [state,disPatch] = useReducer(reducer,defaultState)
    return (
        <div>
            child --- {state.num}
        </div>
    )
}