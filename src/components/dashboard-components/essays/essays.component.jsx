import React from 'react';
import Modal from '../../../ui-components/modal/modal.ui-component';
import EssayReview from '../essay-review/essay-review.component';

import './essays.style.scss';

const Essays = () => {
  return (
    <Modal className='modal-review'>
      <div className="essays">
        <h4 className="essays__title">Essays Review</h4>
        <div className="essays__body">
          <EssayReview essay="B1 UNIT 2A" />
          <EssayReview essay="B1+ Unit 1A" />
          <EssayReview essay="B1 End of Course A" />
          <EssayReview essay="B1 Mid-Term A" />
        </div>
      </div>
    </Modal>
  );
};

export default Essays;
