import React from "react"
import PropTypes from "prop-types"

const Header = ({ titleAppend, titleHighlight, titlePrepend }) => (
  <header className="header">
    <nav className="nav" />
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
  titleAppend: PropTypes.string,
  titleHighlight: PropTypes.string.isRequired,
  titlePrepend: PropTypes.string,
}

Header.defaultProps = {
  titleAppend: "",
  titlePrepend: "",
}

export default Header
