import React from "react"
import { Link } from "react-router-dom"
import withBreadcrumbs from "react-router-breadcrumbs-hoc"

import productsData, {getProductsMap} from './../Products/productsData'
import blogData, { getBlogMap } from './../BlogPage/blogData'

const productsArray = getProductsMap(productsData)
const blogArray = getBlogMap(blogData)

const DynamicProductBreadcrumb = ({ match }) => (
  <span>{productsArray[match.params.productId].name}</span>
);

const DynamicPostBreadcrumb = ({ match }) => (
  <span>{blogArray[match.params.postId].name}</span>
);

const routes = [
  { path: "/shop/:category/:type/:productId", breadcrumb: DynamicProductBreadcrumb },
  { path: "/blog/:postId", breadcrumb: DynamicPostBreadcrumb }
];

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