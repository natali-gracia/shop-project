import React, { Component } from 'react'

import './shoppage.css'

import productsData from '../Products/productsData'
import Sidebar from './Sidebar/Sidebar'
import SortFilterSelect from './SortFilterSelect/SortFilterSelect'
import ProductsListItem from '../Products/ProductsListItem'
import Pagination3 from './Pagination/Pagination3'

const productsArray = productsData.sort((a,b)=> b.id - a.id)

// const items = [
//     this.props.match.params.type === undefined && this.props.match.params.category === undefined ? productsArray :
//     this.props.match.params.category === undefined ? productsArray.filter(product=>product.type === `${this.props.match.params.type}`) :
//     this.props.match.params.type === undefined ? productsArray.filter(product=>product.category === `${this.props.match.params.category}`) : 
//     productsArray.filter(product=>product.category === `${this.props.match.params.category}`).filter(product=>product.type === `${this.props.match.params.type}`)]

class ShopPageCopy extends Component {

    state = {
        pager: {},
        pageOfItems: [],
        items = productsArray
    }

    onChangePage = pageOfItems => {
        this.setState({ pageOfItems: pageOfItems })
    }

    componentDidMount = () => {
        if (this.state.items && this.state.items.length) {
            this.setPage(this.props.initialPage)
        }
    }

    setPage = (page) => {
        const { pageSize } = this.props
        const { items, pager } = this.state
        if (page < 1 || page > pager.totalPages) { return }
        pager = this.getPager(items.length, page, pageSize)
        this.setState({ pager: pager })
        let pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1)
        this.setState({ pageOfItems: pageOfItems })
    }

    getPager = (totalItems, currentPage, pageSize) => {
        currentPage = currentPage || 1
        const totalPages = Math.ceil(totalItems / pageSize)
        let startPage, endPage;
        if (totalPages <= 3) {
            startPage = 1
            endPage = totalPages
        } else {
            if (currentPage <= 2) {
                startPage = 1
                endPage = 3
            } else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - 2
                endPage = totalPages
            } else {
                startPage = currentPage - 1
                endPage = currentPage + 1
            }
        }

        const startIndex = (currentPage - 1) * pageSize
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)
        const pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i)

        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        }
    }

    render() {

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
                    {this.state.pageOfItems.map((product, index) => (
                        <div className={Number.isInteger((index+1)/3) ? null : 'products-item-grid'} key={product.id}>
                        <ProductsListItem
                            product={product}
                        />
                        </div>
                    ))}
                </div>
                {/* <Pagination
                        items={match.params.type === undefined ?
                            productsArray : productsArray.filter(product=>product.type === `${match.params.type}`)}
                        onChangePage={setPageOfItems}
                /> */}
                <Pagination3
                        items={this.state.items}
                        pager={this.state.pager}
                        setPage={this.setPage}
                />
                {/* <Switch>
                    <Route exact path='/shop' render={() =>
                        <Pagination
                        items={productsData.sort((a,b)=> b.id - a.id)}
                        onChangePage={onChangePage}
                        />
                    }/>
                    <Route exact path='/shop/all-categories/:type' render={() =>
                        <Pagination
                        items={typeProps}
                        onChangePage={onChangePage}
                        />
                    }/>
                </Switch> */}
            </div>
        </div>
    )
}}

ShopPageCopy.defaultProps = {
    initialPage: 1,
    pageSize: 9
}

export default ShopPageCopy
