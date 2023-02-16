// useNavigate编程式跳转
import { useNavigate } from 'react-router-dom';

export default function Home() {
  let List = [
    {
      name: "辣条",
      price: 1
    }, {
      name: "可乐",
      price: 3
    }, {
      name: "面包",
      price: 5
    }
  ]
  // 创建编程式跳转对象
  let navigate = useNavigate()
  return (
    <div>
      <h1>首页</h1>
      <ul>
        {
          List.map((item, index) => {
            return (
              <li key={index} onClick={()=>{
                navigate(`/info?name=${item.name}&price=${item.price}`)
              }}> {item.name}
              </li>
            )
          })
        }
      </ul>
      <button onClick={()=>{
        navigate(-1)
      }}>后退</button>
      <button onClick={()=>{
        navigate(1)
      }}>前进</button>
    </div>
  )
}
