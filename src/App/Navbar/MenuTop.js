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
                                        <Link to="/">
                                            <img src="/images/nav/woman.jpg" alt="Woman"/>
                                        </Link>
                                    </div>
                                    <div className="dropdown-menu-content">
                                        <div className="dropdown-menu-title">
                                            <Link to="/">Woman</Link>
                                        </div>
                                        <div className="dropdown-menu-list">
                                            <ul className="nav-links">
                                                <li><Link to="/">New Arrival</Link></li>
                                                <li><Link to="/">Bags</Link></li>
                                                <li><Link to="/">Wallets</Link></li>
                                                <li><Link to="/">Accessories</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 menu-column">
                                    <div className="dropdown-menu-img">
                                        <Link to="/">
                                            <img src="/images/nav/man.png" alt="Man"/>
                                        </Link>
                                    </div>
                                    <div className="dropdown-menu-content">
                                        <div className="dropdown-menu-title">
                                            <Link to="/">Man</Link>
                                        </div>
                                        <div className="dropdown-menu-list">
                                            <ul className="nav-links">
                                                <li><Link to="/">New Arrival</Link></li>
                                                <li><Link to="/">Bags</Link></li>
                                                <li><Link to="/">Wallets</Link></li>
                                                <li><Link to="/">Cases</Link></li>
                                                <li><Link to="/">Accessories</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 menu-column">
                                    <div className="dropdown-menu-img">
                                        <Link to="/">
                                            <img src="/images/nav/special.jpg" alt="Special Designs"/>
                                        </Link>
                                    </div>
                                    <div className="dropdown-menu-content">
                                        <div className="dropdown-menu-title">
                                            <Link to="/">Special Designs</Link>
                                        </div>
                                        <div className="dropdown-menu-list">
                                            <ul className="nav-links">
                                                <li><Link to="/">Cases</Link></li>
                                                <li><Link to="/">Bags</Link></li>
                                                <li><Link to="/">Exclusive Order</Link></li>
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
                                        <div className="widget-text-small">Exclusive Designs</div>
                                        <div className="widget-text-large">Sale up to 30% off</div>
                                        <Link to="/" className="btn-link btn-white">
                                            <span>Explore Now</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li><Link to="/">Blog<span className='label-new' style={labelHotMargin}>New</span></Link></li>
                <li><Link to="/">About us</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul> 
        </div>
    )
}

export default MenuTop
