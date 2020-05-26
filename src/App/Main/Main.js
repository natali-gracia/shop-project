import React from 'react'
import { Route } from "react-router-dom"

import HomePage from './MainContent/HomePage'
import AccountPage from './AccountPage/AccountPage'

const Main = () => {
    return (
        <main>
            <div className='container'>
                <Route exact path='/' component={HomePage}/>
                <Route path='/account/:authOption' component={AccountPage}/>
            </div>
        </main>
    )
}

export default Main
