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