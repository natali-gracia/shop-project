import React,{Component}  from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './pagination.css'

class Pagination extends Component {

    state = {
        pager: {}
    }

    
    componentWillMount() {
        this.setPage(this.props.initialPage);
    }

    // componentDidMount = () => {
    //     if (this.props.items && this.props.items.length) {
    //        this.setPage(this.props.initialPage)
    //     }
    // }

    // componentDidUpdate = (prevProps) => {
    //     if (this.props.items !== prevProps.items) {
    //        this.setPage(this.props.initialPage)
    //     }
    // }

    setPage = (page) => {
        const { items, pageSize } = this.props
        let pager = this.state.pager
        if (page < 1 || page > pager.totalPages) {
            return
        }
        pager = this.getPager(items.length, page, pageSize)
        this.setState({ pager: pager })
        let pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1)
        this.props.onChangePage(pageOfItems)
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
        console.log(this.props.items)

        const pager = this.state.pager

        if (!pager.pages || pager.pages.length <= 1) {
            return (
                <div className="page-total">
                    Showing: {pager.startIndex + 1}-{pager.endIndex + 1} of {this.props.items.length}
                </div>
            )
        }

        return (
            <React.Fragment>
                <div className="page-total">
                    Showing: {pager.startIndex + 1}-{pager.endIndex + 1} of {this.props.items.length}
                </div>
                <div className="toolbar-bottoms wrap">
                    <Link to='#' title='First page'><button 
                        className={pager.currentPage === 1 ? 'hidden btn-square arrow-first' : 'btn-square arrow-first'} 
                        onClick={() => this.setPage(1)}
                        >
                    </button></Link>
                    <Link to='#' title='Previous page'><button 
                        className={pager.currentPage === 1 ? 'hidden btn-square arrow-prev' : 'btn-square arrow-prev'} 
                        onClick={() => this.setPage(pager.currentPage - 1)}
                        >
                    </button></Link>
                    {pager.pages.map((page, index) =>
                        <Link to='#' key={index}><button 
                            className={pager.currentPage === page ? 'active btn-square' : 'btn-square'} 
                            onClick={() => this.setPage(page)}
                        >
                            {page}                       
                        </button></Link>
                    )}
                    <Link to='#' title='Next page'><button 
                        className={pager.currentPage === pager.totalPages ? 'hidden btn-square arrow-next' : 'btn-square arrow-next'}
                        onClick={() => this.setPage(pager.currentPage + 1)}
                    ></button></Link>
                    <Link to='#' title='Last page'><button 
                        className={pager.currentPage === pager.totalPages ? 'hidden btn-square arrow-last' : 'btn-square arrow-last'} 
                        onClick={() => this.setPage(pager.totalPages)}
                        >
                    </button></Link>
                </div>
            </React.Fragment>
    )}
}


Pagination.propTypes = {
    items: PropTypes.array.isRequired,
    onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number,
    pageSize: PropTypes.number
}

Pagination.defaultProps = {
    initialPage: 1,
    pageSize: 9
}

export default Pagination
