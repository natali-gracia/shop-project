import React from 'react'

import './header.css'

import CurrencySelect from "./CurrencySelect/CurrencySelect"
import SocialLinks from './SocialLinks/SocialLinks'
import SearchForm from './SearchForm/SearchForm'
import Logo from './Logo/Logo'
import CartHeader from './CartHeader/CartHeader'

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className="header-top wrap">
                    <div className="col-md-3">
                        <CurrencySelect/>
                    </div>
                    <div className="col-md-6">
                        <ul className="customer-links wrap center">
                            <li><a href="/">My Wishlist</a></li>
                            <li><a href="/">Checkout</a></li>
                            <li><a href="/">Sign In</a></li>
                            <li><a href="/">Create an account</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <SocialLinks/>
                    </div>
                </div>
                <div className="header-inner wrap">
                    <div className="col-md-4">
                        <SearchForm/>
                    </div>
                    <div className="col-md-4">
                        <Logo/>
                    </div>
                    <div className="col-md-4">
                        <CartHeader/>
                    </div>
                </div>
            </div>
        </header>            
    )
}

export default Header

