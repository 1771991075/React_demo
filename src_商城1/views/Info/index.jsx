import React from 'react'
import WithRouter from '../../router/withRouter'
import { Component } from 'react'

class Info extends Component {
  state={
    name:'',
    price:''
  }

  componentDidMount(){
    let [search] = this.props.router.searchParams
    let name = search.get('name')
    let price = search.get('price')
    this.setState({
      name:name,
      price:price
    })
  }

  render() {
    const {name,price} = this.state
    return (
      <div>
        <div className='topNav'>
            <div></div>
            <div><h2>商品详情</h2></div>
            <div></div>
        </div>
        <div>
            <table border='1'>
                <thead>
                  <tr>
                    <td>商品名称</td>
                    <td>商品价格</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{name}</td>
                    <td>{price}</td>
                  </tr>
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}

export default WithRouter(Info)
