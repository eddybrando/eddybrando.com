import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

const Header = ({ nav, titleAppend, titleHighlight, titlePrepend }) => (
  <header className="header">
    <nav className="nav">
      <div className="header-links">
        {nav.map(({ label, link }, index) => (
          <Link key={index} to={link} className="link-block">
            {label}
          </Link>
        ))}
      </div>
    </nav>

    <Fade ssrFadeout duration={750}>
      <section className="title">
        <h1 className="headline">
          {titlePrepend}
          <span className="highlight">{titleHighlight}</span>
          {titleAppend}
        </h1>
      </section>
    </Fade>
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
