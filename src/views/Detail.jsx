import React, { Component } from 'react'
import axios from 'axios'
import WithRouter from '../router/withRoute'

class Detail extends Component {
    state={
        id:1,
        hero:{},
        heroList:[]
    }

    componentDidMount(){
        let that = this
        async function getD(){
            let id = that.props.router.search.get('id')
            await that.setState({
                id:id
            })
            axios.get(`https://game.gtimg.cn/images/lol/act/img/js/hero/${that.state.id}.js`).then(res=>{
                console.log(res.data)
                that.setState({
                    hero:res.data.skins[1].sourceImg,
                    heroList:res.data.spells
                })
            }).catch(err=>{
                console.log(err)
            })
        }
        getD()
    }

    render() {
        const {hero,heroList} = this.state
        return (
            <div>
                <img src={hero} alt="" id='bigImg' />
                <div>
                    {
                        heroList.map((item,index)=>{
                            return (
                                <div key={index}>
                                    <img src={item.abilityIconPath} alt="" />
                                    <p>{item.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default WithRouter(Detail)
