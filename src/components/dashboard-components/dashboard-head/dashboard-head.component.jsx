import React from 'react';
import Essays from '../essays/essays.component';
import Review from '../review/review.component';
import SpeakingReviews from '../speaking-reviews/speaking-reviews.component';

import './dashboard-head.style.scss';

const DashboardHead = () => {
  return (
    <div className="dashboard-head">
      <Review />
      <Essays />
      <SpeakingReviews />
    </div>
  );
};

export default DashboardHead;
