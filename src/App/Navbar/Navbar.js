import React from 'react'

import './navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className='container'>
                <div className="menu-row">         
                    <ul className="menu-top wrap">
                        <li className="active"><a href="">Home</a></li>
                        <li className="menu-dropdown"><a href="">
                            Shop
                            <span className='label-hot'>Hot</span>
                            </a>
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
