import React from 'react';
import Modal from '../../../ui-components/modal/modal.ui-component';

import './review.style.scss';

const Review = () => {
  return (
    <Modal className='modal-review'>
      <div className="review">
        <h4 className="review__title">HomeWork TODO</h4>
        <div className="review__body">
          <div className="review__body-elem">
            <h4>HW U4 L3</h4>
            <p>CELT English A2</p>
          </div>
          <div className="review__body-elem">
            <h4>HW U2 L3</h4>
            <p>CELT English A2</p>
          </div>
        </div>
        {/* <ReviewLink /> */}
      </div>
    </Modal>
  );
};

export default Review;
