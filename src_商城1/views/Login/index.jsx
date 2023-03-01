import React from 'react'
import { Component } from 'react'
import WithRouter from '../../router/withRouter'
import './index.css'

class Login extends Component {

    state={
        username:'',
        password:''
    }

    render() {
        let {username,password} = this.state
        return (
            <div>
                <div className='topNav'>
                    <div></div>
                    <div><h2>登录</h2></div>
                    <div></div>
                </div>
                <div>
                    <div className='username'>
                        <div className="input-group flex-nowrap">
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" onChange={e=>{
                                this.setState({username:e.target.value})
                            }}/>
                        </div>
                    </div>
                    <div className='pwd'>
                        <div className="input-group flex-nowrap">
                            <input type="text" className="form-control" placeholder="password" aria-label="password" aria-describedby="addon-wrapping" onChange={e=>{
                                this.setState({password:e.target.value})
                            }}/>
                        </div>
                    </div>
                </div>
                <div className='btnlogin'>
                    <button type="button" className="btn btn-success" onClick={()=>{
                        localStorage.setItem('token','123456')
                        let [search] = this.props.router.searchParams
                        let redircturl = search.get('redircturl')
                        this.props.router.navigate(redircturl)
                    }}>登录</button>
                    <button type="button" className="btn btn-success">注册</button>
                </div>
            </div>
        )
    }
}

export default WithRouter(Login)

