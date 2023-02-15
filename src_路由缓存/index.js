import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import {AliveScope} from 'react-activation'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <HashRouter>
        <AliveScope>
            <App/>
        </AliveScope>
    </HashRouter>
)