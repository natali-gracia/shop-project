import React from 'react'
import { Route } from "react-router-dom"

import BreadcrumbRow from './BreadcrumbRow/BreadcrumbRow'
import HomePage from './MainContent/HomePage'
import AccountPage from './AccountPage/AccountPage'

const Main = () => {
    return (
        <main>
            <BreadcrumbRow/>
            <div className='container'>    
                <Route exact path='/' component={HomePage}/>
                <Route path='/account/:authOption' component={AccountPage}/>
            </div>
        </main>
    )
}

export default Main
