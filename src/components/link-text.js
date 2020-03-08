import React from "react";
import PropTypes from "prop-types"
import { Link } from "gatsby";
import { ArrowRight16 } from '@carbon/icons-react';

export const LinkText = ({label, to, style}) => (
  <Link className="link-block" title={label} to={to} style={style}>
    {label} <ArrowRight16 className="link-arrow" />
  </Link>
);

LinkText.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  style: PropTypes.object,
}

LinkText.defaultProps = {
  style: {},
}

export default LinkText;