import React from 'react';
import PropTypes from 'prop-types';
import {ArrowUpRight16} from '@carbon/icons-react';
import Img from 'gatsby-image';

const CompanyBlock = ({
  data,
  date,
  details,
  headline,
  logoImg,
  lead,
  linkLabel,
  linkTo,
}) => (
  <div className={`work-company-block ${logoImg ? '' : 'no-img'}`}>
    {logoImg ? (
      <div>
        <Img
          className="company-logo"
          fixed={data[logoImg].childImageSharp.fixed}
        />
      </div>
    ) : null}
    <div>
      <h3>
        {headline} {date ? <span className="inline-date">({date})</span> : null}
      </h3>
      <div className="font-small">{lead}</div>
      <div className="font-small" style={{opacity: 0.4}}>
        {details}
      </div>
    </div>
    {date ? <div className="col-date">{date}</div> : null}
    {linkLabel && linkTo ? (
      <div>
        <a
          className="link-block"
          href={linkTo}
          rel="noopener noreferrer"
          target="_blank"
          title={linkLabel}
        >
          {linkLabel} <ArrowUpRight16 className="link-arrow" />
        </a>
      </div>
    ) : null}
  </div>
);

CompanyBlock.propTypes = {
  data: PropTypes.object,
  date: PropTypes.string,
  details: PropTypes.string,
  headline: PropTypes.string.isRequired,
  logoImg: PropTypes.string,
  lead: PropTypes.string.isRequired,
  linkLabel: PropTypes.string,
  linkTo: PropTypes.string,
};

CompanyBlock.defaultProps = {
  data: {},
  date: '',
  details: '',
  logoImg: '',
  linkLabel: '',
  linkTo: '',
};

export default CompanyBlock;
