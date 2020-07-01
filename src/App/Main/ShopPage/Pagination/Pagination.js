import React,{Component}  from 'react'

import {connect} from 'react-redux'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './pagination.css'

import { getPager } from '../../../../store/actions/paginationAction'

class Pagination extends Component {

    componentDidMount = () => {
        if (this.props.items && this.props.items.length) {
           this.setPage(1)
        }
    }

    // componentDidUpdate = (prevProps) => {
    //     if (this.props.items !== prevProps.items) { return (
    //       () => this.setPage(1))
    //     }
    // }

    async setPage(page) {
        const { items, pageSize } = this.props
        await this.props.getPager(items.length, page, pageSize)
        let pageOfItems = items.slice(this.props.pager.startIndex, this.props.pager.endIndex + 1)
        this.props.onChangePage(pageOfItems)
    }

    render() {

        const { items, pager } = this.props

        console.log(items)

        if (!pager.pages || pager.pages.length <= 1) {
            return (
                <div className="page-total">
                    Showing: {pager.startIndex + 1}-{pager.endIndex + 1} of {items.length}
                </div>
            )
        }



        return (
            <React.Fragment>
                <div className="page-total">
                    Showing: {pager.startIndex + 1}-{pager.endIndex + 1} of {items.length}
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
    pageSize: PropTypes.number
}

Pagination.defaultProps = {
    pageSize: 9
}

const mapStateToProps = (state) => ({
    pager:state.pager.pager,
})

export default connect(
    mapStateToProps,
    { getPager }
) (Pagination)
