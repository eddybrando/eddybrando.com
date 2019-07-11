import React from "react"
import PropTypes from "prop-types"

import Header from "./header"

const Layout = ({ children, headerTitle, mainContainerClass }) => (
  <div className="page-grid">
    <Header
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
}

Layout.defaultProps = {
  mainContainerClass: "",
}

export default Layout
