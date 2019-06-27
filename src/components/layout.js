/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Header from "./header"
import Footer from "./footer"
import Menu from "./menu"
import "../css/bulma.min.css"
import "../css/site.sass"

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
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
