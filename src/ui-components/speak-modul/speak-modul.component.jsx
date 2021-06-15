import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import VoiceRecorder from '../../components/speak-title/voice-recorder/voice-recorder.component';

import './speak-modul.style.scss';

const SpeakModul = (props) => {
  const { title } = useSelector((state) => state.interface);

  const content = (
    <div className="speak-modul">
      <div className="content">
        <div className="content__title">
          <h4>Speaking</h4>
        </div>
        <div className="content__body">
          <h5>Title: {title}</h5>
        </div>
        <VoiceRecorder />
      </div>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('record-root'));
};

export default React.memo(SpeakModul);
