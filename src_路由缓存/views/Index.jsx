import React, { Component } from 'react'
import axios from 'axios'
import WithRouter from '../router/withRoute'

class Index extends Component {
    state={
        heroList:[]
    }

    componentDidMount(){
        axios.get(`https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js`).then(res=>{
            console.log(res)
            this.setState({
                heroList:res.data.hero
            })
        }).catch(err=>{
            console.log(err)
        })
    }

    render() {
        const {heroList} = this.state
        return (
            <div className='container'>
                {
                    heroList.map((item,index)=>{
                        return (
                            <div className='hero' key={index} onClick={()=>{
                                this.props.router.myuseNavigate(`/detail?id=${item.heroId}`)
                            }}>
                                <img src={`https://game.gtimg.cn/images/lol/act/img/champion/${item.alias}.png`} alt="" />
                                <p className='heroName'>{item.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default WithRouter(Index)
