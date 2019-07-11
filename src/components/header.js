import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ nav, titleAppend, titleHighlight, titlePrepend }) => (
  <header className="header">
    <nav className="nav">
      {nav.map(({ label, link }, index) => (
        <Link key={index} to={link} className="link-block">
          {label}
        </Link>
      ))}
    </nav>

    <section className="title">
      <h1 className="headline">
        {titlePrepend}
        <span className="highlight">{titleHighlight}</span>
        {titleAppend}
      </h1>
    </section>
  </header>
)

Header.propTypes = {
  nav: PropTypes.array.isRequired,
  titleAppend: PropTypes.string,
  titleHighlight: PropTypes.string.isRequired,
  titlePrepend: PropTypes.string,
}

Header.defaultProps = {
  titleAppend: "",
  titlePrepend: "",
}

export default Header
