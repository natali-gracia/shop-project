import React from 'react'

import './navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className='container'>
                <div className='nav-menu'>   
                    <ul className="menu-top wrap center">
                        <li className="active"><a href="">Home</a></li>
                        <li className="dropdown-menu"><a href="">
                            Shop
                            <span className='label-hot'>Hot</span>
                            </a>
                            <div className="dropdown-menu-inner">
                                <div className="container wrap">
                                    <div className="col-lg-9 wrap">
                                        <div className="col-lg-4 menu-column">
                                            <div className="dropdown-menu-img">
                                                <a href="/">
                                                    <img src="/images/nav/woman.jpg" alt="Woman"/>
                                                </a>
                                            </div>
                                            <div className="dropdown-menu-content">
                                                <div className="dropdown-menu-title">
                                                    <a href="">Woman</a>
                                                </div>
                                                <div className="dropdown-menu-list">
                                                    <ul className="nav-links">
                                                        <li><a href="/">New Arrival</a></li>
                                                        <li><a href="/">Bags</a></li>
                                                        <li><a href="/">Wallets</a></li>
                                                        <li><a href="/">Accessories</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 menu-column">
                                            <div className="dropdown-menu-img">
                                                <a href="/">
                                                    <img src="/images/nav/man.png" alt="Man"/>
                                                </a>
                                            </div>
                                            <div className="dropdown-menu-content">
                                                <div className="dropdown-menu-title">
                                                    <a href="">Man</a>
                                                </div>
                                                <div className="dropdown-menu-list">
                                                    <ul className="nav-links">
                                                        <li><a href="/">New Arrival</a></li>
                                                        <li><a href="/">Bags</a></li>
                                                        <li><a href="/">Wallets</a></li>
                                                        <li><a href="/">Accessories</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 menu-column">
                                            <div className="dropdown-menu-img">
                                                <a href="/">
                                                    <img src="/images/nav/special.jpg" alt="Special Designs"/>
                                                </a>
                                            </div>
                                            <div className="dropdown-menu-content">
                                                <div className="dropdown-menu-title">
                                                    <a href="">Special Designs</a>
                                                </div>
                                                <div className="dropdown-menu-list">
                                                    <ul className="nav-links">
                                                        <li><a href="/">Cases</a></li>
                                                        <li><a href="/">Bags</a></li>
                                                        <li><a href="/">Exclusive Order</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 menu-column">
                                        <div className="widget-dropdown-menu">
                                            <div className="dropdown-menu-img">
                                                <img src="/images/nav/widget-menu.jpg" alt=""/>
                                            </div>
                                            <div className="widget-menu-text block-center">
                                                <div className="widget-text-small">Exclusive Designs</div>
                                                <div className="widget-text-large">Sale up to 30% off</div>
                                                <a href="/" className="widget-menu-btn">
                                                    <span>Explore Now</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><a href="">
                            Blog
                            <span className='label-new'>New</span>
                            </a>
                        </li>
                        <li><a href="">About us</a></li>
                        <li><a href="">Contact</a></li>
                    </ul> 
                </div> 
            </div>
        </nav>
    )
}

export default Navbar
