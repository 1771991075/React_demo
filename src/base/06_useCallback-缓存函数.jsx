import React from 'react'

export default function Home() {
    let [name, setName] = useState('');
    let [msg, setMsg] = useState("好好学习")
    // useCallback 可用来缓存函数
    let getName = useCallback(() => {
        console.log("缓存了")
        console.log(name)
        console.log(msg)
    }, [] )
    return (
        <div>
            <h1>useCallback缓存函数</h1>
            <div>
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />;
                <button onClick={getName}>获取输入框内容</button>
                <button onClick={() => {
                    setMsg("天天向上")
                }}>改变msg</button>
            </div>
        </div>
    )
}
