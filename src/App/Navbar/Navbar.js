import React from 'react'

import MenuTop from './MenuTop'

const Navbar = () => {
    return (
        <nav>
            <div className='container' style={{position: "relative"}}>
                <MenuTop/>   
            </div>
        </nav>
    )
}

export default Navbar
