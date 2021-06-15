import React from 'react';
import Modal from '../../../ui-components/modal/modal.ui-component';
import SpeakElement from '../speak-element/speak-element.component';

import './speaking-reviews.style.scss';

const SpeakingReviews = () => {
  return (
    <Modal className='modal-review'>
      <div className="speaking-reviews">
        <h4 className="speaking-reviews__title">Speaking Reviews</h4>
        <div className="speaking-reviews__body">
          <SpeakElement speaking="B2 UNIT 4A" />
          <SpeakElement speaking="B2 UNIT 9B" />
          <SpeakElement speaking="B2 UNIT 10B" />
          <SpeakElement speaking="B2 End of Course" />
        </div>
      </div>
    </Modal>
  );
};

export default SpeakingReviews;
