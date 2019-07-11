import React from "react"
import PropTypes from "prop-types"

import Header from "./header"

const Layout = ({ children, mainContainerClass }) => (
  <div className="page-grid">
    <Header />
    <main className={`main-container ${mainContainerClass}`}>{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  mainContainerClass: PropTypes.string,
}

Layout.defaultProps = {
  mainContainerClass: "",
}

export default Layout
