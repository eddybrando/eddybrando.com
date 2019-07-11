import React from "react"
import PropTypes from "prop-types"

import Header from "./header"

const Layout = ({ children, headerTitle, mainContainerClass, nav }) => (
  <div className="page-grid">
    <Header
      nav={nav}
      titleAppend={headerTitle.append}
      titleHighlight={headerTitle.highlight}
      titlePrepend={headerTitle.prepend}
    />
    <main className={`main-container ${mainContainerClass}`}>{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerTitle: PropTypes.shape({
    append: PropTypes.string,
    highlight: PropTypes.string.isRequired,
    prepend: PropTypes.string,
  }).isRequired,
  mainContainerClass: PropTypes.string,
  nav: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired
  ),
}

Layout.defaultProps = {
  mainContainerClass: "",
  nav: [],
}

export default Layout
