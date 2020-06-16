import React from 'react'

import './shoppage.css'

import productsData from './../Products/productsData'
import Sidebar from './Sidebar/Sidebar'
import SortFilterSelect from './SortFilterSelect/SortFilterSelect'
import ProductsListItem from './../Products/ProductsListItem'

const ShopPage = () => {
    return (
        <div className='main-contant wrap'>
            <Sidebar/>
            <div className="col-md-9 contant-list">
                <div className="toolbar wrap">
                    <div className="col-md-4">
                        <div className="page-total">
                            Showing: 1-9 of 14
                        </div>
                    </div>
                    <div className="col-md-8 wrap right">
                        <div className="browse-sort-filters">
                            <SortFilterSelect/>
                        </div> 
                    </div>
                </div>
                <div className="products-grid wrap">
                    {productsData.map(product => (
                        <ProductsListItem
                            id={product.id}
                            key={product.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ShopPage
