import React from 'react';

import './essay-review.style.scss';

const EssayReview = ({essay}) => {
  return (
    <>
      <div className="essay">
        <div className="essay-block"></div>
        <div className="essay-square"></div>
        <h4>{essay}</h4>
      </div>
    </>
  );
};

export default EssayReview;
