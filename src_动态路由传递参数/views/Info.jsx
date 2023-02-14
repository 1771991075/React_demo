
import { NavLink } from 'react-router-dom'
//用来获取动态参数
import { useParams } from 'react-router-dom'

export default function Info(){
  // 获取动态参数
  let {goodsname,price} = useParams()
  return (
    <div>
      <div className='infoNav'>
        <NavLink to='/'>＜</NavLink>
        <div>详情</div>
        <div></div>
      </div>
      <h1>商品详情---{goodsname}---{price}</h1>
    </div>
  )
}
