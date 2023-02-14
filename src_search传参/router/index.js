import elements from './elements'
import { useRoutes } from 'react-router-dom'
import React from 'react'

export default function RouteDOM() {
  let element = useRoutes(elements)
  return (
    <div>
        {element}
    </div>
  )
}
