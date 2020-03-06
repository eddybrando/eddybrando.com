import React from "react"
import PropTypes from "prop-types"
import Fade from "react-reveal/Fade"
import Header from "./header"

const Layout = ({ children, headerTitle, mainContainerClass, nav }) => (
  <div className="page-grid">
    <Header
      nav={nav}
      titleAppend={headerTitle.append}
      titleHighlight={headerTitle.highlight}
      titlePrepend={headerTitle.prepend}
    />

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="header-bg-curve"
    >
      <path
        fill="#bfd4f7"
        fillOpacity="1"
        d="M0,224L80,197.3C160,171,320,117,480,117.3C640,117,800,171,960,186.7C1120,203,1280,181,1360,170.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      ></path>
    </svg>

    <Fade duration={500} delay={250}>
      <main className={`main-container ${mainContainerClass}`}>{children}</main>
    </Fade>

    <div className="animated-bg">
      {[...Array(10)].map((cb, index) => (
        <div className="bg-element" key={index} />
      ))}
    </div>
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
