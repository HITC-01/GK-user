import React from 'react';
import PropTypes from 'prop-types';

const ReportPage = ({ handleClose, show }) => {
  const showHideClassName = show ? '' : 'display-none';
  return (
    <div className={`up-modalWrapper up-${showHideClassName}`}>
      <div className="up-modal">
        <section className="up-modal-report">
          <h1> Report Track For </h1>
          <br />
          <ul>
            <li>
              <a href="www.google.com"> Copyright infringement </a>
            </li>
            <li>
              <a href="www.google.com"> Privacy Violation </a>
            </li>
            <li>
              <a href="www.google.com"> Pornographic Content </a>
            </li>
            <li>
              <a href="www.google.com"> Abuse </a>
            </li>
            <li>
              <a href="www.google.com"> Hate Speech </a>
            </li>
            <li>
              <a href="www.google.com"> Illegal Content </a>
            </li>
            <li>
              <a href="www.google.com"> Other </a>
            </li>
          </ul>
        </section>
        <button className="up-close" onClick={handleClose} type="button"> X </button>
      </div>
    </div>
  );
};

export default ReportPage;

ReportPage.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
};

ReportPage.defaultProps = {
  show: false,
  handleClose: {},
};
