import React, { useState } from 'react'
import One from '../component/One'
import Two from '../component/Two'
import globaleContext from '../utils/globaleContext'

export default function Home() {
    let [name, setName] = useState("张三");
    let [age, setAge] = useState(18);
    return (
        <div>
            <h2>useConetxt hooks使用</h2>
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
        </div>
    )
}
