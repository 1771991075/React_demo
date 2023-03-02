import { createContext, useContext, useReducer } from 'react'
let GlobaleContext = createContext();
let defaultSate = {
    num: 100,
    msg: "学习使我快乐",
    carList: [1, 2, 3, 4, 5]
}
let reducer = (state, action) => {
    switch (action.type) {
        case "ADD_CART":
            let newState = JSON.parse(JSON.stringify(state));
            newState.carList.push(10);
            return newState;
        case "ADD":
            let addState = { ...state };
            addState.num += action.playnum
            return addState;
        default:
            return state;
    }
    return state
}
function Home() {
    let [state, dispatch] = useReducer(reducer, defaultSate)
    return (
        <div>
            <h1>组件共享数据</h1>
            <GlobaleContext.Provider value={{
                state,
                dispatch
            }}>
                <Two></Two>
                <One></One>
            </GlobaleContext.Provider>
        </div>
    )
}

function One() {
    let value = useContext(GlobaleContext)
    let { state, dispatch } = value;
    return (
        <div>
            <h2>one组件 ---- {state.num} --- {state.msg}</h2>
            <ul>
                {
                    state.carList.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </ul>
            <button onClick={() => {
                dispatch({
                    type: "ADD",
                    playnum: 10
                })
            }}>+=10</button>
        </div>
    )
}

function Two() {
    let value = useContext(GlobaleContext);
    let { state, dispatch } = value;
    return (
        <div>
            <h2>two组件---{state.num}----{state.msg}</h2>
            <div>
                购物车数量：{state.carList.length}
            </div>
            <button onClick={() => {
                dispatch({
                    type: "ADD_CART"
                })
            }}>加入购物车</button>
        </div>
    )
}


export default Home;