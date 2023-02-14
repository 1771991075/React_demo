
import { NavLink } from 'react-router-dom'
//用来获取search传递的参数
import { useSearchParams } from 'react-router-dom'

export default function Info(){
  // search 对象   setSearch 用来修改属性的方法
  let [search,setSearch] = useSearchParams()
  // 获取search传递过来的属性
  let goodsname = search.get('goodsname')
  let price = search.get('price')
  return (
    <div>
      <div className='infoNav'>
        <NavLink to='/'>＜</NavLink>
        <div>详情</div>
        <div></div>
      </div>
      <h1>商品详情---{goodsname}---{price}</h1>
      <button onClick={()=>{
        // 修改search传递过来的参数
        setSearch('goodsname=面包&price=5')
      }}>修改search传递过来的属性值</button>
    </div>
  )
}
