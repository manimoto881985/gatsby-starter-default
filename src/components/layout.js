/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Menu from "./menu"
import "./bulma.min.css"
import "./common.sass"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <section className="section">
          <div className="container ikukyu__container">
            <main>{children}</main>
            <Menu />
          </div>
        </section>
        <footer>
          <div>© {new Date().getFullYear()} 男性育休やることマニュアル</div>
          <div>
            <OutboundLink href="#">お問い合わせ</OutboundLink>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
