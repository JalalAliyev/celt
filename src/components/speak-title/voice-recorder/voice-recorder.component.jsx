import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MicRecorder from 'mic-recorder-to-mp3';
import { MdDelete } from 'react-icons/md';
import ButtonRecorder from '../../../ui-components/button-recorder/button-recorder.component';
import Timer from '../timer/timer.component';
import Button from '../../../ui-components/button/button.component';
import { changeBackdrop, saveVoice } from '../../../store/interface-slice';
import swal from 'sweetalert';

import './voice-recorder.style.scss';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

const VoiceRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [blobURL, setBlobURL] = useState('');
  const [isBlocked, setIsBlocked] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    navigator.getUserMedia(
      { audio: true },
      () => {
        setIsBlocked(false);
      },
      () => {
        setIsBlocked(true);
      },
    );
  }, []);

  const start = () => {
    if (isBlocked) {
      return;
    } else {
      Mp3Recorder.start()
        .then(() => setIsRecording(true))
        .catch((err) => console.log(err));
    }
  };

  const stop = (isComplete = true) => {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        if (isComplete) setBlobURL(blobURL);
        setIsRecording(false);
      })
      .catch((err) => console.log(err));
  };

  const recordHandler = () => {
    if (isRecording) {
      stop();
    } else {
      start();
    }
  };

  const saveBlobURL = () => {
    dispatch(saveVoice(true));
    setBlobURL('');
    dispatch(changeBackdrop(''));
    if (blobURL) {
      swal({
        title: 'Speaking submitted!',
        text: 'The speakingwas submitted. Your teacher will review it soon. You wil be notified after your seaking is reviewed',
        icon: 'success',
        button: { text: 'OK', closeModal: true },
      });
    } else {
      swal({
        title: 'Error!',
        text: 'Something went wrong. Please try again!',
        icon: 'error',
        button: { text: 'OK', closeModal: true },
      });
    }
  };

  const stopDeleteRecording = () => {
    stop(false);
  };

  console.log('Voice recorder component updated!');

  return (
    <>
      <div className="voice-recorder">
        <div className="voice-recorder__top">
          <ButtonRecorder onRecord={recordHandler} isRecording={isRecording} />
          {isRecording && <Timer />}
          {isRecording && (
            <div
              onClick={stopDeleteRecording}
              className="voice-recorder__top-delete">
              <MdDelete />
            </div>
          )}
        </div>
        {!!blobURL && <audio src={blobURL} controls="controls" />}
      </div>
      <div className="content__footer">
        <div className="content__footer-left">
          <Button
            onClick={() => dispatch(changeBackdrop(''))}
            className="button__close">
            Close
          </Button>
        </div>
        <div className="content__footer-right">
          <Button onClick={() => setBlobURL('')} className="button__delete">
            Delete
          </Button>
          <Button onClick={saveBlobURL} className="button__save">
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default React.memo(VoiceRecorder);
