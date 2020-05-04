import React from 'react'

import './header.css'

import CurrencySelect from "./CurrencySelect/CurrencySelect"
import SocialLinks from './SocialLinks/SocialLinks'
import SearchForm from './SearchForm/SearchForm'
import Logo from './Logo/Logo'
import HeaderCart from './HeaderCart/HeaderCart'

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className="header-top wrap">
                    <div className="col-lg-3">
                        <CurrencySelect/>
                    </div>
                    <div className="col-lg-6">
                        <ul className="customer-links wrap center">
                            <li><a href="/">My Wishlist</a></li>
                            <li><a href="/">Checkout</a></li>
                            <li><a href="/">Sign In</a></li>
                            <li><a href="/">Create an account</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <SocialLinks/>
                    </div>
                </div>
                <div className="header-inner wrap">
                    <div className="col-lg-4">
                        <SearchForm/>
                    </div>
                    <div className="col-lg-4">
                        <Logo/>
                    </div>
                    <div className="col-lg-4">
                        <HeaderCart/>
                    </div>
                </div>
            </div>
        </header>            
    )
}

export default Header

