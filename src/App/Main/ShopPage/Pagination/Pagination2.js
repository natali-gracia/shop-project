import React,{ useState, useEffect }  from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './pagination.css'

const Pagination2 = ({
    items,
    initialPage = 1,
    pageSize = 9,
    onChangePage
}) => {

    console.log(items)

    const [pager, setPager] = useState()

    useEffect(() => {
        setPage(initialPage)
      });
    

    const setPage = (page) => {

        if (page < 1 || page > pager.totalPages) {
            return
        }
        pager = getPager(items.length, page, pageSize);
        setPager(pager)
        const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1)
        onChangePage(pageOfItems)  
    }

    const getPager = (totalItems, currentPage, pageSize) => {
        currentPage = currentPage || 1
        const totalPages = Math.ceil(totalItems / pageSize)
        let startPage
        let endPage
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        const startIndex = (currentPage - 1) * pageSize
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)

        const pages = [...new Set([...Array((endPage + 1) - startPage).keys().map(i => startPage + i)])]

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
        };
    }

    console.log(pager)

    return (
        <React.Fragment>
            {!pager.pages || pager.pages.length <= 1 ? null : 
                <div className="toolbar-bottoms wrap">
                    <Link to='#'><button 
                        className={pager.currentPage === 1 ? 'hidden btn-square arrow-prev' : 'btn-square arrow-prev'} 
                        onClick={() => setPage(pager.currentPage - 1)}
                        >
                    </button></Link>
                    {pager.pages.map((page, index) =>
                        <Link to='#' key={index}><button 
                            className={pager.currentPage === page ? 'active btn-square' : 'btn-square'} 
                            onClick={() => setPage(page)}
                        >
                            {page}                       
                        </button></Link>
                    )}
                    <Link to='#'><button 
                        className={pager.currentPage === pager.totalPages ? 'hidden btn-square arrow-next' : 'btn-square arrow-next'}
                        onClick={() => setPage(pager.currentPage + 1)}
                    ></button></Link>
                </div>}
        </React.Fragment>
    )
}

Pagination2.propTypes = {
    items: PropTypes.array.isRequired,
    onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number,
    pageSize: PropTypes.number
}

export default Pagination2
