import React from 'react'
import './index.css'
import bus from '../../utils/bus.js'
export default class TopNav extends React.Component{
    state={
        todo:'',
        plan:['所有任务','已完成','未完成'],
        planIndex:0
    }

    changeIndex(index){
        bus.emit('getIndex',index)
        this.setState({planIndex:index})
    }

    addTodo(todo){
        if(!todo){
            alert('请输入任务')
            return 
        }
        bus.emit('getTodo',todo)
        this.setState({todo:''})
    }

    render(){
      let {todo,plan,planIndex} = this.state
        return (
            <div>
                <div className='nav'>
                    <h3>任务计划表</h3>
                </div>
                <div className='plan'>
                    {
                        plan.map((item,index)=>{
                            return <div className={planIndex===index?'active':''} key={index} onClick={()=>this.changeIndex(index)}><h4>{item}</h4></div>
                        })
                    }
                    <input type="text" value={todo} onChange={e =>this.setState({todo:e.target.value}) }/>
                    <button className='addbtn' onClick={()=>this.addTodo(todo)}>添加</button>
                </div>
            </div>
            
        )
    }
}


