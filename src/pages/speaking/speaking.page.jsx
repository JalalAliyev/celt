import React from 'react';
import { Link } from 'react-router-dom';
import { speakLevelList as speakings } from '../../utils/speaking-level';

import './speaking.style.scss';

const Speaking = () => {
  return (
    <div className="speaking">
      <div className="speaking__header">
        <h4>Speakings</h4>
      </div>
      <div className="speaking__body">
        {speakings.map((speaking) => (
          <Link
            key={speaking.id}
            to={`/student/speaking/${speaking.id}`}
            className="speaking__body-elem">
            <img src={speaking.src} alt="gen" />
            <p>{speaking.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Speaking;
