import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import Pagination from 'react-js-pagination'

import './shoppage.css'
import './Pagination/pagination.css'

import productsData from './../Products/productsData'
import Sidebar from './Sidebar/Sidebar'
import SortFilterSelect from './SortFilterSelect/SortFilterSelect'
import ProductsListItem from './../Products/ProductsListItem'

import { fetchFilterProducts } from './../../../store/actions/filterProductsAction'

const productsArray = productsData.sort((a,b)=> b.id - a.id)

const ShopPage = ({
    match,
    filteredItems,
    selectedFilter,
    pageSize = 9
}) => {

    const [activePage, setActivePage] = useState(1)

    const startIndex = (activePage - 1) * pageSize
    const endIndex = Math.min(startIndex + pageSize - 1, filteredItems.length - 1)
    const pageOfItems = filteredItems.slice(startIndex, endIndex + 1)

    const items = 
        match.params.type === undefined && match.params.category === undefined ? productsArray :
        match.params.category === undefined ? productsArray.filter(product=>product.type === `${match.params.type}`) :
        match.params.type === undefined ? productsArray.filter(product=>product.category === `${match.params.category}`) : 
        productsArray.filter(product=>product.category === `${match.params.category}`).filter(product=>product.type === `${match.params.type}`)

    useEffect(() => { 
        fetchFilterProducts(filteredItems)
    }, [selectedFilter])

    useEffect(() => { 
        setActivePage(1)
    }, [filteredItems])

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber)
        window.scrollTo(0, 0)
    }



    return (
        <div className='main-contant wrap'>
            <Sidebar
                productsData={productsData}
                items={items}
                match={match}
            />
            <div className="col-md-9 contant-list">
                <div className="toolbar wrap">
                    <div className="col-md-4">
                        <div className="page-total">
                            Showing: {startIndex + 1}-{endIndex + 1} of {filteredItems.length}
                        </div>
                    </div>
                    <div className="col-md-8 wrap right">
                        <div className="browse-sort-filters">
                            <SortFilterSelect
                                items={filteredItems}
                                match={match}
                            />
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
                { filteredItems.length <= pageSize ? null :
                    <Pagination
                        hideDisabled
                        activePage={activePage}
                        itemsCountPerPage={pageSize}
                        totalItemsCount={filteredItems.length}
                        pageRangeDisplayed={3}
                        onChange={(pageNumber)=>handlePageChange(pageNumber)}
                        innerClass={'toolbar-bottoms wrap'}
                        itemClass={'btn-square btn-link'}
                        itemClassFirst={'arrow-first'}
                        itemClassPrev={'arrow-prev'}
                        itemClassNext={'arrow-next'}
                        itemClassLast={'arrow-last'}
                        prevPageText={''}
                        firstPageText={''}
                        lastPageText={''}
                        nextPageText={''}
                    />
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    filteredItems: state.filterProducts.filteredItems,
    selectedFilter:  state.filterProducts.sort,
})

export default connect (
    mapStateToProps
) (ShopPage)