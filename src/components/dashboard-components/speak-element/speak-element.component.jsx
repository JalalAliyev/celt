import React from 'react';
import { Avatar } from '@material-ui/core';

import './speak-element.style.scss';

const SpeakElement = ({ speaking }) => {
  return (
    <div className="speak-element">
      <Avatar className="speak-element__avatar">NS</Avatar>
      <h4 className='speak-element__title'>{speaking}</h4>
    </div>
  );
};

export default SpeakElement;
