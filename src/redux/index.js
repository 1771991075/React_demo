// createStore 用来创建redux仓库 combineReducers 合并多个reducer
import { legacy_createStore as createStore ,combineReducers } from "redux";
import userReducer from "./reducer/userReducer";

//合并reducer
let reducer = combineReducers({
    userReducer
})

// 合并reducer之后 获取状态时 需要使用 store.getState().carReducer.属性名
let store = createStore(reducer)
export default store
