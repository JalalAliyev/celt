import React from 'react';
import { Link } from 'react-router-dom';

import './review-link.style.scss'

const ReviewLink = () => {
  return (
    <div className="review__link">
      <Link to="/">View All</Link>
    </div>
  );
};

export default ReviewLink;
