import React from 'react'
import { Route, Switch } from "react-router-dom"

import './breadcrumbrow.css'

import Breadcrumbs from './Breadcrumbs'
import BreadcrumbRouteConfig from './BreadcrumbRouteConfig'

const BreadcrumbRow = () => {
    return (
        <div className='breadcrumb-wrap'>
                <div className="breadcrumbs">
                    <Switch><h1>{BreadcrumbRouteConfig.map((route) => (
                        <Route key={route} {...route} />
                        ))}
                    </h1></Switch>
                    <div className="breadcrumbs-row">
                        <Breadcrumbs/>
                    </div>
                </div>
        </div>
    )
}

export default BreadcrumbRow
