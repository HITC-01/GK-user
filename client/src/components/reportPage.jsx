import React from 'react';
import PropTypes from 'prop-types';

const ReportPage = ({ handleClose, show }) => {
  const marginStyle = { margin: '10px' };
  const showHideClassName = show ? 'up-modalWrapper' : 'up-display-none';
  const violations = ['Copyright Infringement', 'Privacy Violation', 'Pornographic Content', 'Abuse', 'Hate Speech', ' Illegal Content', 'Other'];
  const reportLinks = violations.map((violation) => {
    return (
      <li className="black" key={violation}>
        {violation}
      </li>
    );
  });

  return (
    <div className={`${showHideClassName}`}>
      <div className="up-modal">
        <section style={{ margin: '4px' }}>
          <h1 style={marginStyle}> Report Track For </h1>
          <hr style={marginStyle} />
          <ul>
            {reportLinks}
          </ul>
          <h3> Disclaimer: </h3>
          <p>Reported tracks are reviewed by a specialist team who take action if the content violates our Guidelines or Terms. Repeat violation or serious breaches can result in the permanent deletion of accounts. </p>
          <button onClick={handleClose} type="button"> Close Out </button>
        </section>
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
