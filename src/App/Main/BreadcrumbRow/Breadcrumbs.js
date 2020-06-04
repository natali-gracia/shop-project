import React from "react"
import { Link } from "react-router-dom"
import withBreadcrumbs from "react-router-breadcrumbs-hoc"

import productsData, {getProductsMap} from './../Products/productsData'

const productsArray = getProductsMap(productsData)

const DynamicUserBreadcrumb = ({ match }) => (
  <span>{productsArray[match.params.productId].name}</span>
);

const routes = [{ path: "/shop/:category/:type/:productId", breadcrumb: DynamicUserBreadcrumb }];

const Breadcrumbs = ({ breadcrumbs }) => (
  <div className="wrap breadcrumbs-line">
    {breadcrumbs.map(({ breadcrumb, match }, index) => (
      <div className="breadcrumbs-link" key={match.url}>
        <Link to={match.url || ""}>{breadcrumb}</Link>
        <span>{index < breadcrumbs.length - 1 && "/"}</span>
      </div>
    ))}
  </div>
)

export default withBreadcrumbs(routes)(Breadcrumbs)