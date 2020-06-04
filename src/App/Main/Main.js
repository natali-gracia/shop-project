import React from 'react'
import { Route } from "react-router-dom"

import BreadcrumbRow from './BreadcrumbRow/BreadcrumbRow'
import HomePage from './MainContent/HomePage'
import ProductPage from './ProductPage/ProductPage'
import AccountPage from './AccountPage/AccountPage'

const Main = () => {
    return (
        <main>
            <Route path='/:path' component={BreadcrumbRow}/>
            <div className='container'>    
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/shop/:category/:type/:productId' component={ProductPage}/>
                <Route path='/account/:authOption' component={AccountPage}/>
            </div>
        </main>
    )
}

export default Main
