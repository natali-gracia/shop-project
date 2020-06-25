import React from 'react'
import { Redirect, Route } from "react-router-dom"

import './sidebar.css'

import { Link } from 'react-router-dom'
import SidebarFilterBlock from './SidebarFilterBlock'

const Sidebar = () => {
    return (
        <aside className="col-md-3 sidebar">
            <Route exact path='/shop' render={() =>
                <React.Fragment>
                    <div className="block-title first-title"><h2>Categories</h2></div>
                    <div className="widget-content">
                        <ul>
                            <li><Link to="/shop/men">Men</Link></li>
                            <li><Link to="/shop/women">Women</Link></li>
                            <li><Link to="/shop/special-designs">Special Designs</Link></li>
                            <li><Link to="/bespoke">Exclusive Order</Link></li>
                        </ul>
                    </div>
                </React.Fragment> 
            }/>
            <Route exact path='/shop' render={() =>
                <React.Fragment>
                    <div className="block-title"><h2>Types</h2></div>
                    <div className="widget-content">
                        <ul>
                            <li><Link to="/shop/all-categories/bags">Bags</Link></li>
                            <li><Link to="/shop/all-categories/cases">Cases</Link></li>
                            <li><Link to="/shop/all-categories/wallets">Wallets</Link></li>
                            <li><Link to="/shop/all-categories/accessories">Accessories</Link></li>
                        </ul>
                    </div>
                </React.Fragment> 
            }/>
            <Route exact path="/shop/all-categories" render={() => (<Redirect to="/shop"/>)}/>
            <Route exact path='/shop/all-categories/:type' render={({match}) =>
                <React.Fragment>
                    <div className="block-title first-title"><h2>Categories</h2></div>
                    <div className="widget-content">
                        <ul>
                            <li><Link to={`/shop/men/${match.params.type}`}>Men</Link></li>
                            <li><Link to={`/shop/women/${match.params.type}`}>Women</Link></li>
                            <li><Link to={`/shop/special-designs/${match.params.type}`}>Special Designs</Link></li>
                            <li><Link to={`/shop/exclusive-order/${match.params.type}`}>Exclusive Order</Link></li>
                        </ul>
                    </div>
                </React.Fragment> 
            }/>
            <Route exact path='/shop/:category' render={({match}) =>
                <React.Fragment>
                    <div className="block-title"><h2>Types</h2></div>
                    <div className="widget-content">
                        <ul>
                            <li><Link to={`/shop/${match.params.category}/bags`}>Bags</Link></li>
                            <li><Link to={`/shop/${match.params.category}/cases`}>Cases</Link></li>
                            <li><Link to={`/shop/${match.params.category}/wallets`}>Wallets</Link></li>
                            <li><Link to={`/shop/${match.params.category}/accessories`}>Accessories</Link></li>
                        </ul>
                    </div>
                </React.Fragment> 
            }/>
            <div className="block-title"><h2>Filter Selection</h2></div>
            <SidebarFilterBlock/>
        </aside>
    )
}

export default Sidebar
