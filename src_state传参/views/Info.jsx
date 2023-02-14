
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function Info(){
  console.log(useLocation);
  //获取state传递的参数
  let {goodsname,price} = useLocation().state
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
