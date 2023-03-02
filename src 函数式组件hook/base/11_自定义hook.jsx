/* 
自定义hook 就是将组件中可以服用的代码抽离出来：
规范：
1. 自定义hook函数名必须使用use开头
2.  自定义hook必须要有返回值
3. 在自定义hook中可以使用react hook
*/

import Mynum from "../components/num"
function Home() {

    return (
        <div>
            <h1>自定义hooks</h1>
            <Mynum></Mynum>
        </div>
    )
}

export default Home