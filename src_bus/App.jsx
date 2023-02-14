import React from 'react'
import List from './components/List/index.jsx'
import TopNav from './components/TopNav/index.jsx'
import './App.css'
export default class App extends React.Component{
    render(){
        return (
            <div className='container'>
              <TopNav/>
              <List/>
            </div>
        )
    }
}

