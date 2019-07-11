import React from "react"
import PropTypes from "prop-types"

import Header from "./header"

const Layout = ({ children }) => (
  <div className="page-grid">
    <Header />
    <main className="main-container">{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
