
import { NavLink } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

export default function Info(){
  let [search] = useSearchParams()
  let name = search.get('name')
  let price = search.get('price')
  return (
    <div>
      <div className='infoNav'>
        <NavLink to='/'>＜</NavLink>
        <div>详情</div>
        <div></div>
      </div>  
      <h1>商品详情---{name}---{price}</h1>
    </div>
  )
}
