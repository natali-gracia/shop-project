import React from 'react'

import { Link } from 'react-router-dom'

import './menutop.css'

const MenuTop = ({
    labelHotMargin = {top: -8},
}) => {
    return (
        <div>
            <ul className="menu-top wrap center">
                <li className="active"><Link to="/">Home</Link></li>
                <li className="dropdown-menu"><Link to="/shop">
                    Shop
                    <span className='label-hot' style={labelHotMargin}>Hot</span>
                    </Link>
                    <div className="dropdown-menu-inner">
                        <div className="container wrap">
                            <div className="col-md-9 wrap">
                                <div className="col-md-4 menu-column">
                                    <div className="dropdown-menu-img">
                                        <Link to="/shop/women">
                                            <img src="/images/nav/woman.jpg" alt="women"/>
                                        </Link>
                                    </div>
                                    <div className="dropdown-menu-content">
                                        <div className="dropdown-menu-title">
                                            <Link to="/shop/women">women</Link>
                                        </div>
                                        <div className="dropdown-menu-list">
                                            <ul className="nav-links">
                                                <li><Link to="/shop/women">New Arrival</Link></li>
                                                <li><Link to="/shop/women/bags">Bags</Link></li>
                                                <li><Link to="/shop/women/wallets">Wallets</Link></li>
                                                <li><Link to="/shop/women/accessories">Accessories</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 menu-column">
                                    <div className="dropdown-menu-img">
                                        <Link to="/shop/men">
                                            <img src="/images/nav/man.png" alt="Men"/>
                                        </Link>
                                    </div>
                                    <div className="dropdown-menu-content">
                                        <div className="dropdown-menu-title">
                                            <Link to="/shop/men">Men</Link>
                                        </div>
                                        <div className="dropdown-menu-list">
                                            <ul className="nav-links">
                                                <li><Link to="/shop/men">New Arrival</Link></li>
                                                <li><Link to="/shop/men/bags">Bags</Link></li>
                                                <li><Link to="/shop/men/wallets">Wallets</Link></li>
                                                <li><Link to="/shop/men/cases">Cases</Link></li>
                                                <li><Link to="/shop/men/accessories">Accessories</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 menu-column">
                                    <div className="dropdown-menu-img">
                                        <Link to="/shop/special-designs">
                                            <img src="/images/nav/special.jpg" alt="Special Designs"/>
                                        </Link>
                                    </div>
                                    <div className="dropdown-menu-content">
                                        <div className="dropdown-menu-title">
                                            <Link to="/shop/special-designs">Special Designs</Link>
                                        </div>
                                        <div className="dropdown-menu-list">
                                            <ul className="nav-links">
                                                <li><Link to="/shop/special-designs/cases">Cases</Link></li>
                                                <li><Link to="/shop/special-designs/bags">Bags</Link></li>
                                                <li><Link to="/bespoke">Exclusive Order</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 menu-column">
                                <div className="widget-dropdown-menu">
                                    <div className="dropdown-menu-img">
                                        <img src="/images/nav/widget-menu.jpg" alt=""/>
                                    </div>
                                    <div className="widget-menu-text block-center">
                                        <div className="widget-text-small">Exclusive Design</div>
                                        <div className="widget-text-large">Bespoke</div>
                                        <Link to="/bespoke" className="btn-link btn-white">
                                            <span>Explore Now</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li><Link to="/blog">Blog<span className='label-new' style={labelHotMargin}>New</span></Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul> 
        </div>
    )
}

export default MenuTop
