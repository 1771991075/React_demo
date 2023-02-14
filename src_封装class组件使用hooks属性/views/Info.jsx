
import WithRouter from '../router/withRoute'

import React, { Component } from 'react'

class Info extends Component {

  state={
    name:'',
    price:''
  }

  componentDidMount(){
    let name = this.props.router.search.get('name')
    let price = this.props.router.search.get('price')
    this.setState({
      name:name,
      price:price
    })
  }

  render() {
    const {name,price} = this.state
    return (
      <div>
        {name}------{price}
      </div>
    )
  }
}
export default WithRouter(Info)
