import React from 'react'
import './index.css'
import PubSub from 'pubsub-js'
export default class List extends React.Component{
    state={
      planIndex:0,
      todoList: [
        {
          id:1,
          name: "打篮球",
          state: true, //true 为已完成  //false 为未完成
        },
        {
          id:2,
          name: "玩游戏",
          state: false,
        },
        {
          id:3,
          name: "学习",
          state: false,
        },
        {
          id:4,
          name: "写代码",
          state: false,
        },
      ]
    }

    componentDidMount(){
      PubSub.subscribe('sendIndex',(_,stateObj)=>{
        this.setState(stateObj)
      })
      PubSub.subscribe('sendTodoObj',(_,todoName)=>{
        const {todoList} = this.state
        let newName = todoName.name
        let newId = todoList[todoList.length-1].id+1
        todoList.push({id:newId,name:newName,state:false})
        this.setState({todoList})
      })
    }

    //删除任务
    delTodo(id){
      const {todoList} = this.state
      let index = todoList.findIndex(item=>item.id===id)
      todoList.splice(index,1)
      this.setState({todoList})
    }

    //改变状态
    changeState(id){
      const {todoList} = this.state
      let index = todoList.findIndex(item=>item.id===id)
      todoList[index].state = true
      this.setState({todoList})
    }
    
    render(){
      let {todoList,planIndex} = this.state
      return (
        <div className='list'>
            {
                (planIndex===1?todoList.filter(item=>item.state===true):planIndex===2?todoList.filter(item=>item.state===false):todoList).map(item=>{
                    return  <div key={item.id} className="todo">
                                <div className='todo1'>
                                    {item.state===true?<div><span className='did'>已完成</span>{item.name}</div>:<div><input type="checkbox" onChange={()=>this.changeState(item.id)}/>{item.name}</div>}
                                </div>
                                <button className='delbtn' onClick={()=>this.delTodo(item.id)}>删除</button>
                            </div>
                })
            }
        </div>
      )
    }
}