import React from 'react'

import './shoppage.css'

import Sidebar from './Sidebar/Sidebar'

const ShopPage = () => {
    return (
        <div className='main-contant wrap'>
            <Sidebar/>
            <div className="col-md-9">Hello world!</div>
        </div>
    )
}

export default ShopPage
