import React, { useState } from 'react'

import './shoppage.css'

import productsData from './../Products/productsData'
import Sidebar from './Sidebar/Sidebar'
import SortFilterSelect from './SortFilterSelect/SortFilterSelect'
import ProductsListItem from './../Products/ProductsListItem'
import Pagination from './Pagination/Pagination'

const ShopPage = () => {

    const [pageOfItems, setPageOfItems] = useState([])

    const onChangePage = pageOfItems => {
        setPageOfItems(pageOfItems)
    }

    return (
        <div className='main-contant wrap'>  
            <Sidebar/>
            <div className="col-md-9 contant-list">
                <div className="toolbar wrap">
                    <div className="col-md-4">
                        {/* Page-total placeholder */}
                    </div>
                    <div className="col-md-8 wrap right">
                        <div className="browse-sort-filters">
                            <SortFilterSelect/>
                        </div> 
                        
                    </div>
                </div>
                <div className="products-grid wrap">
                    {pageOfItems.map((product, index) => (
                        <div className={Number.isInteger((index+1)/3) ? null : 'products-item-grid'} key={product.id}>
                        <ProductsListItem
                            product={product}
                        />
                        </div>
                    ))}
                </div>
                <Pagination
                    items={productsData}
                    onChangePage={onChangePage}
                />
            </div>
        </div>
    )
}

export default ShopPage
