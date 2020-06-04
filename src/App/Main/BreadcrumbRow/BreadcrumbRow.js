import React from 'react'
import { Route, Switch } from "react-router-dom"

import './breadcrumbrow.css'

import Breadcrumbs from './Breadcrumbs'
import BreadcrumbRouteConfig from './BreadcrumbRouteConfig'

const BreadcrumbRow = ({match}) => {
    return (
        <div className='breadcrumb-wrap'>
                <div className="breadcrumbs">
                    <Switch>
                        <React.Fragment>
                            <h1>{BreadcrumbRouteConfig.map((route) => (<Route key={route.path} {...route} />))}</h1>
                        </React.Fragment>
                    </Switch>
                    <div className="breadcrumbs-row">
                        <Breadcrumbs
                        match={match}/>
                    </div>
                </div>
        </div>
    )
}

export default BreadcrumbRow
