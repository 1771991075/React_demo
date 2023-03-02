import React , {useState,useMemo} from 'react'

export default function Home() {
    let [num,setNum] = useState(0);
    let [price,setPrice] = useState(0);
    // useMemo 计算函数 参数一执行函数 参数二依赖项 若为空数组则不依赖任何数据 ，若不为空数组，则当依赖项发生改变时就会重新计算
    // 注意： 执行函数必须要有返回值
    let sum = useMemo(()=>{
        return num*price
    },[num,price])
    return (
        <div>
            <h1>useMemo 计算 hooks</h1>
            商品单价：<input type="text" value={price} onChange={(e)=>{
                setPrice(e.target.value)
            }} /> * 商品数量：<input type="text" value={num} onChange={(e)=>{
                setNum(e.target.value)
            }}/> = 商品总价：{sum}
        </div>
    )
}
