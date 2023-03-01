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