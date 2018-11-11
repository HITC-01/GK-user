import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/reportPage.css';

const ReportPage = ({ handleClose, show }) => {
  const showHideClassName = show ? 'rpModalWrapper' : 'rpDisplayNone';
  const violations = ['Copyright Infringement', 'Privacy Violation', 'Pornographic Content', 'Abuse', 'Hate Speech', ' Illegal Content', 'Other'];
  const reportLinks = violations.map((violation) => {
    return (
      <li key={violation}>
        <p className={styles.reportText}>
          {violation}
        </p>
      </li>
    );
  });

  return (
    <div className={styles[`${showHideClassName}`]}>
      <div className={styles.rpModal}>
        <section style={{ margin: '4px' }}>
          <h1 className={styles.rpHeader}> Report Track For </h1>
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
