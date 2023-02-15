import React, { Component } from 'react'
import axios from 'axios'
import WithRouter from '../router/withRoute'

class Detail extends Component {
    state={
        hero:{},
        heroList:[]
    }

    async componentDidMount(){
        let id = this.props.router.search.get('id')
        await axios.get(`https://game.gtimg.cn/images/lol/act/img/js/hero/${id}.js`).then(res=>{
            console.log(res.data)
            this.setState({
                hero:res.data.skins[1].sourceImg,
                heroList:res.data.spells
            })
        }).catch(err=>{
            console.log(err)
        })
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
