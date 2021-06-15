import React from 'react';

import './message.style.scss';

const ResultMessage = ({ isPassed }) => {
  return (
    <div className={`result-message ${isPassed ? 'passed' : 'failed'}`}>
      {isPassed ? <small>Passed</small> : <small>Faild</small>}
    </div>
  );
};

export default React.memo(ResultMessage);
