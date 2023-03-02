// createStore 用来创建redux仓库 combineReducers 合并多个reducer
import { legacy_createStore as createStore ,combineReducers,applyMiddleware,compose } from "redux";
import userReducer from "./reducer/userReducer";
import cartReducer from './reducer/cartReducer';
import reduxThunk from 'redux-thunk'

//合并reducer
let reducer = combineReducers({
    userReducer,
    cartReducer
})

// 合并reducer之后 获取状态时 需要使用 store.getState().carReducer.属性名

// 需判断环境，仅在开发环境下添加以下一行代码
// 如果安装了 redux devtools 扩展程序，则使用 redux devtools 扩展程序，否则使用 redux 中默认提供的 compose
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// let store = createStore(reducer,composeEnhancers(applyMiddleware(reduxThunk)));
let store = createStore(reducer,applyMiddleware(reduxThunk))
export default store
