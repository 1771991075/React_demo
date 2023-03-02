## HOOK 的特点

    1. 必须是一个函数
    2. use开头
    3. hooks只能在函数式组件中使用
    4. 必须有返回值

## useState

    1.使用useState 创建 状态 

    2.useState 得到的是一个数组 数组中第一项为初始状态 第二项为修改状态的方法
        let [num,setNum] = useState(100)

    3.useState 对于引用数据类型的状态必须先深拷贝一下才可以更新视图
        let addUser = ()=>{
            let newList = [...list]
            newList.push(元素)
            setList(newList)
        }

## useEffect

    useEffect 类似于 类组件中 ComponentDidMount ComponentDidUpdate
    参数一执行回调函数，参数二：依赖项，若为空数组则不依赖任何属性 有且只会执行一次，若不为空数组，则该依赖项发生改变时就会再次触发,若第二个参数不传则只要是状态改变就会执行

    副作用函数可以有return值但return值必须为一个函数 ，当组件销毁时触发这个函数

## useRef

    ref不能直接获取函数式组件实例

    useRef可以保留数据
    let num = useRef(0)
    let list = useRef([1,2,3,4])
    获取值：list.current

## forwordRef结合useImperativeHandle使用

    1. 若父组件想要获取子组件中的状态或方法 子组件需要先使用forwordRef 修饰
    2. 在子组件中使用 useImperativeHandle hooks 将子组件要暴露的属性返回
    3. 在父组件中使用 ref.current.属性名获取

    注意：
        1.子组件中，使用forword修饰，参数中必须有两个参数，props、ref 
        2.指定子组件暴露给ref指定属性 参数一 ref 对象 参数二回调函数 必须要有返回值，返回值必须是个对象 可以将要供父组件使用的状态或方法返回
        useImperativeHandle(ref, () => {
            return {
                num,
                changeNum
            }
        })

## uscCallback

    uscCallback可用来缓存函数

## useContext

    1.创建globaleContext
        import { createContext } from "react";
        let globaleContext = createContext()
        export default globaleContext
    2.在父组件中引入
        import globaleContext from '../utils/globaleContext'
        <globaleContext.Provider value={{
                name,
                age,
                setage:(newAge)=>{
                    setAge(newAge)
                }
            }}>
                <One />
                <Two />
        </globaleContext.Provider>
    3.在子组件中引入
        import globaleContext from '../utils/globaleContext'
        获取供应商提供的数据 参数为 要获取的上下位对象
        let value = useContext(globaleContext)
        使用：value.name

## useMemo

    1.创建需要计算的变量

        let [num,setNum] = useState(0);
        let [price,setPrice] = useState(0);

    2.useMemo 计算函数 参数一执行函数 参数二依赖项 若为空数组则不依赖任何数据 ，若不为空数组，则当依赖项发生改变时就会重新计算
    注意： 执行函数必须要有返回值

        let sun = useMemo(()=>{
            return num*price
        },[num,price])

## useReducer

    1.创建初始化状态
        let defaultState = {}
    2.创建改变回调函数   参数一初始状态 参数二 提交的数据对象
        let reducer =(state,action)=>{
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
    3.创建reducer 参数一 reducer函数 参数二 初始化状态  state 表示 共享状态 dispatch 则为改变状态唯一方法
        let [state,disPatch] = useReducer(reducer,defaultState)

    4.点击切换
        <button onClick={()=>{
                 disPatch({
                    type:"addage"
                 })
            }}>++</button>
