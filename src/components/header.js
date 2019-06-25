import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav id="navbar" className="navbar ikukyu__navbar">
      <div className="container ikukyu__container">
        <div className="navbar-brand">
          <h1>
            <Link
              to="/"
              className="ikukyu__navbar-item"
            >
              <img src="/images/common/title.svg" className="ikukyu__navbar-item__title"/>
            </Link>
          </h1>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
