import React from 'react'

import './header.css'

import CurrencySelect from "./CurrencySelect/CurrencySelect";

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className="header-top wrap">
                    <div className="col-lg-3">
                        <CurrencySelect/>
                    </div>
                    <div className="col-lg-6">
                        <ul className="customer-links">
                            <li><a href="">My Wishlist</a></li>
                            <li><a href="">Checkout</a></li>
                            <li><a href="">Sign In</a></li>
                            <li><a href="">Create an account</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <ul className="social-links">
                            <li><a href="" className='fb-icon'></a></li>
                            <li><a href="" className='twitter-icon'></a></li>
                            <li><a href="" className='insta-icon'></a></li>
                            <li><a href="" className='youtube-icon'></a></li>
                            <li><a href="" className='pinterest-icon'></a></li>
                        </ul>
                    </div>
                </div>
                <div className="header-inner wrap">
                    <div className="col-lg-3">Hello world!</div>
                    <div className="col-lg-6">Hello world!</div>
                    <div className="col-lg-3">Hello world!</div>
                </div>
            </div>
        </header>            
    )
}

export default Header

