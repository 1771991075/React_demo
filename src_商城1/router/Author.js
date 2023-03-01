import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Author(props) {

    let token = localStorage.getItem('token')

    if(token){
        return (
            <div>{props.oldComponent}</div>
        )
    } 

    return <Navigate to={`/login?redircturl=${props.redircturl}`}></Navigate>
}
