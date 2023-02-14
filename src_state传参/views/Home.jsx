
import { NavLink } from 'react-router-dom'

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
  return (
    <div>
      <h1>首页</h1>
      <ul>
        {
          List.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={`/info`} state={{ goodsname: item.name, price: item.price }}>{item.name}</NavLink>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
