import React from 'react';
import { BsFillMicFill } from 'react-icons/bs';

import './button-recorder.style.scss';

const ButtonRecorder = ({ isRecording, onRecord }) => {
  return (
    <div
      onClick={onRecord}
      className={`button-recorder ${isRecording && 'button-recording'}`}>
      <BsFillMicFill />
    </div>
  );
};

export default React.memo(ButtonRecorder);
