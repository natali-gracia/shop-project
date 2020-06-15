import React from 'react'

import './sidebar.css'

import { Link } from 'react-router-dom'
import SidebarFilterBlock from './SidebarFilterBlock'

const Sidebar = () => {
    return (
        <aside className="col-md-3 sidebar">
            <div className="block-title first-title"><h2>Categories</h2></div>
            <div className="widget-content">
                <ul>
                    <li><Link to="/shop/man">Man</Link></li>
                    <li><Link to="/shop/woman">Woman</Link></li>
                    <li><Link to="/shop/special-designs">Special Designs</Link></li>
                    <li><Link to="/shop/exclusive-order">Exclusive Order</Link></li>
                </ul>
            </div>
            <div className="block-title"><h2>Types</h2></div>
            <div className="widget-content">
                <ul>
                    <li><Link to="/shop/bags">Bags</Link></li>
                    <li><Link to="/shop/cases">Cases</Link></li>
                    <li><Link to="/shop/wallets">Wallets</Link></li>
                    <li><Link to="/shop/accessories">Accessories</Link></li>
                </ul>
            </div>
            <div className="block-title"><h2>Filter Selection</h2></div>
            <SidebarFilterBlock/>
        </aside>
    )
}

export default Sidebar
