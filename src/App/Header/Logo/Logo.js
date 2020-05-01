import React from 'react'

import './logo.css'

import logo from './logo.png'

const Logo = () => {
    return (
        <div className='logo'>
            <a href="/">
                <img src={logo} alt=""/>
            </a>
        </div>
    )
}

export default Logo
