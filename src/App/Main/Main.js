import React from 'react'
import { Route } from "react-router-dom"

import BreadcrumbRow from './BreadcrumbRow/BreadcrumbRow'
import HomePage from './MainContent/HomePage'
import BespokePage from './BespokePage/BespokePage'
import ShopPage from './ShopPage/ShopPage'
import ProductPage from './ProductPage/ProductPage'
import AccountPage from './AccountPage/AccountPage'

const Main = () => {
    return (
        <main>
            <Route path='/:path' component={BreadcrumbRow}/>
            <div className='container'>    
                <Route exact path='/' component={HomePage}/>
                <Route path='/bespoke' component={BespokePage}/>
                <Route exact path={['/shop', '/shop/:category', '/shop/:type', '/shop/:category/:type','/shop/:type/:category']}
                    component={ShopPage}/>
                <Route exact path='/shop/:category/:type/:productId' component={ProductPage}/>
                <Route path='/account/:authOption' component={AccountPage}/>
            </div>
        </main>
    )
}

export default Main
