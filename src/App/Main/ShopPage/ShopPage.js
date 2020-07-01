import React, { useState } from 'react'

import './shoppage.css'

import productsData from './../Products/productsData'
import Sidebar from './Sidebar/Sidebar'
import SortFilterSelect from './SortFilterSelect/SortFilterSelect'
import ProductsListItem from './../Products/ProductsListItem'
import Pagination from './Pagination/Pagination'

const productsArray = productsData.sort((a,b)=> b.id - a.id)

const ShopPage = ({match}) => {

    const [pageOfItems, setPageOfItems] = useState([])

    const items = 
        match.params.type === undefined && match.params.category === undefined ? productsArray :
        match.params.category === undefined ? productsArray.filter(product=>product.type === `${match.params.type}`) :
        match.params.type === undefined ? productsArray.filter(product=>product.category === `${match.params.category}`) : 
        productsArray.filter(product=>product.category === `${match.params.category}`).filter(product=>product.type === `${match.params.type}`)

    console.log(pageOfItems)

    return (
        <div className='main-contant wrap'>
            <Sidebar
                productsData={productsData}
                items={items}
                onChangePage={setPageOfItems}
            />
            <div className="col-md-9 contant-list">
                <div className="toolbar wrap">
                    <div className="col-md-4">
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
                        items={items}
                        onChangePage={setPageOfItems}
                />
            </div>
        </div>
    )
}

export default ShopPage
