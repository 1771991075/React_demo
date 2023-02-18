import elements from './elements'
import { Routes , Route } from 'react-router-dom'
import React from 'react'
import Author from './Author'

export default function RouteDOM() {
  return (
    <div>
      <Routes>
        {
          elements.map((item,index)=>{
            return <Route path={item.path} element={item.author?<Author oldComponent={item.element} redircturl={item.path}></Author>:item.element} key={index}>
              {
                item.children && item.children.map((two,idx)=>{
                  return <Route key={idx} path={two.path} element={two.author?<Author oldComponent={two.element} redircturl={item.path + '/' + two.path}></Author>:two.element}></Route>
                })
              }
            </Route>
          })
        }
      </Routes>
    </div>
  )
}
