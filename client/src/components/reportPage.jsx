import React from 'react';

const ReportPage = ({handleClose, show}) => {
  const showHideClassName = show ? '' : 'display-none';
  return (
    <div className={`up-modalWrapper ${showHideClassName}`}>
      <div className="modal">
        <section className="up-modal-report">
          <ul>
            <li> 1. Copyright infringement </li>
            <li> 2. Privacy Violation </li>
            <li> 3. Pornographic Content </li>
            <li> 4. Abuse </li>
            <li> 5. Hate Speech </li>
            <li> 6. Illegal Content </li>
            <li> 7. Other </li>
          </ul>
        </section>
        <button className="up-close" onClick={handleClose} type="button"> Close </button>
      </div>
    </div>
  );
};


export default ReportPage;
