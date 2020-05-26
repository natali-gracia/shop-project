import React from 'react'

import { Link } from 'react-router-dom'

import './footer.css'
import logoShort from './../Navbar/FixedNav/logo-short.png';


const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className="container">
                <div className="footer-top wrap">
                    <div className="col-md-3">
                        <div className="ft-logo">
                            <img src={logoShort} alt=""/>
                        </div>
                        <div className="ft-content">
                            Honcharova is a premium store.<br/>Best choice for your shopping. Let<br/>try it to enjoy now.
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h3 className="module-title">Information</h3>
                        <ul>
                            <li><Link to="/">Careers</Link></li>
                            <li><Link to="/">Investor Relations</Link></li>
                            <li><Link to="/">Press Releases</Link></li>
                            <li><Link to="/">Shop with Premium</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3 className="module-title">Customer Care</h3>
                        <ul>
                            <li><Link to="/">Returns</Link></li>
                            <li><Link to="/">Shipping Info</Link></li>
                            <li><Link to="/">Gift Cards</Link></li>
                            <li><Link to="/">Size Guide</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3 className="module-title">Get in touch</h3>
                        <div className="ft-content">
                            <div className="ft-line address"><span>02055 Khreshchatyk str.<br/>Kyiv, Ukraine</span></div>
                            <div className="ft-line phone"><span>+38(050) 255 95 95</span></div>
                            <div className="ft-line email"><span>hello@honcharova.com</span></div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Copyright © 2020 Honcharova store. All Rights Reserved.</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
